import React from 'react';

// A list of all unique categories from our data, plus 'All'
function CategoryFilter({ categories, currentCategory, onCategoryChange }) {
  return (
    <div className="category-filters">
      {/* Add the 'All' button manually */}
      <button
        className={currentCategory === 'All' ? 'active' : ''}
        onClick={() => onCategoryChange('All')}
      >
        All
      </button>

      {/* Map over the fetched categories */}
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={currentCategory === cat.name ? 'active' : ''}
          onClick={() => onCategoryChange(cat.name)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;