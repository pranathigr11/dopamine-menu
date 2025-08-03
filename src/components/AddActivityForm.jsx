import { useState } from 'react';
import { supabase } from '../supabaseClient';

// This component now correctly receives 'categories' as a prop
function AddActivityForm({ categories, session, onActivityAdded, onClose }) {
  const [text, setText] = useState('');
  const [why, setWhy] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!text || !why || !categoryId || !imageFile) {
        throw new Error('Please fill out all fields and select an image.');
      }

      // --- 1. UPLOAD THE IMAGE ---
      const fileName = `${Date.now()}_${imageFile.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('activity-images')
        .upload(fileName, imageFile);
      
      if (uploadError) throw uploadError;

      // --- 2. GET THE PUBLIC URL OF THE UPLOADED IMAGE ---
      const { data: urlData } = supabase.storage
        .from('activity_images')
        .getPublicUrl(fileName);
      
      const imageUrl = urlData.publicUrl;

      // --- 3. INSERT THE NEW ACTIVITY INTO THE DATABASE ---
      const { data: insertData, error: insertError } = await supabase
        .from('custom_activities')
        .insert({
          text,
          why,
          category_id: categoryId,
          image_url: imageUrl,
          user_id: session.user.id,
        })
        .select('*, categories ( name, color )') // Fetch the new activity with category info
        .single(); // We expect only one row back

      if (insertError) throw insertError;
      
      // --- 4. UPDATE THE UI ---
      onActivityAdded(insertData); 
      onClose(); // Close the modal

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-activity-form">
      <h2>Create a New Activity</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="text">Activity Name</label>
          <input
            id="text"
            type="text"
            className="input-field"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="why">Why is this helpful?</label>
          <textarea
            id="why"
            className="input-field"
            value={why}
            onChange={(e) => setWhy(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="input-field"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="" disabled>Select a category</option>
            {/* This now correctly maps over the passed-in categories */}
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            className="input-field"
            accept="image/png, image/jpeg"
            onChange={(e) => setImageFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="button-primary" disabled={loading}>
          {loading ? 'Saving...' : 'Add Activity'}
        </button>
      </form>
    </div>
  );
}

export default AddActivityForm;