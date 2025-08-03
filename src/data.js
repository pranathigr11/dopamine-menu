// Import all your images from the assets folder
import breatheImage from './assets/images/breathe.jpg';
import stretchImage from './assets/images/stretch.jpg';
import waterImage from './assets/images/water.jpg';
import natureImage from './assets/images/nature.jpg';
import sunImage from './assets/images/sun.jpg';
import meditateImage from './assets/images/meditate.jpg';
import tidyImage from './assets/images/tidy.jpg';
import familyImage from './assets/images/family.jpg';
import friendImage from './assets/images/friend.jpg';
import petImage from './assets/images/pet.jpg';
import birdsImage from './assets/images/birds.jpg';
import musicImage from './assets/images/music.jpg';
import planImage from './assets/images/plan.jpg';
import shareImage from './assets/images/share.jpg';
import writeImage from './assets/images/write.jpg';
import unplugImage from './assets/images/unplug.jpg';
import energyImage from './assets/images/energy.jpg';
import cookImage from './assets/images/cook.jpg';
import gameImage from './assets/images/game.jpg';
import flowerImage from './assets/images/flower.jpg';
import ideaImage from './assets/images/idea.jpg';
import teaImage from './assets/images/tea.jpg';
import soundsImage from './assets/images/sounds.jpg';
import journalImage from './assets/images/journal.jpg';
import readImage from './assets/images/read.jpg';
import candleImage from './assets/images/candle.jpg';
import photoImage from './assets/images/photo.jpg';
import relaxImage from './assets/images/relax.jpg';

export const initialActivities = [
  // Category 1: Mind & Body Reset
  { 
    id: 1, 
    category: 'Mind & Body Reset', 
    text: 'Take 5 deep, slow breaths.', 
    why: "Instantly lowers your body's stress response and anchors your focus to the here and now.",
    image: breatheImage 
  },
  { 
    id: 2, 
    category: 'Mind & Body Reset', 
    text: 'Do a 60-second full-body stretch.', 
    why: 'Wakes up your body and brain by releasing stored tension and boosting circulation.',
    image: stretchImage 
  },
  { 
    id: 3, 
    category: 'Mind & Body Reset', 
    text: 'Drink a full glass of water.', 
    why: 'The fastest way to combat brain fog. Hydration is a direct upgrade for your focus and energy levels.',
    image: waterImage 
  },
  { 
    id: 4, 
    category: 'Mind & Body Reset', 
    text: 'Go for a short walk in nature.', 
    why: 'Just a few minutes outside is scientifically proven to lower stress hormones and reset your perspective.',
    image: natureImage 
  },
  { 
    id: 5, 
    category: 'Mind & Body Reset', 
    text: 'Step outside and feel the sun or wind on your face.', 
    why: 'A powerful sensory reset that breaks a digital trance and connects you to the real world.',
    image: sunImage 
  },
  { 
    id: 6, 
    category: 'Mind & Body Reset', 
    text: 'Say a short prayer or meditate for 2 minutes.', 
    why: 'Provides a moment of peace and connects you with your deeper values, putting small stresses in perspective.',
    image: meditateImage 
  },
  { 
    id: 7, 
    category: 'Mind & Body Reset', 
    text: 'Tidy one small, visible surface near you.', 
    why: 'External order creates internal calm. This is a quick, tangible win that clears your mind.',
    image: tidyImage 
  },

  // Category 2: Connection & Joy
  { 
    id: 8, 
    category: 'Connection & Joy', 
    text: 'Call your parents or a close family member.', 
    why: "A powerful dose of connection. It grounds you in love and reminds you what you're working for.",
    image: familyImage 
  },
  { 
    id: 9, 
    category: 'Connection & Joy', 
    text: 'Send a quick "thinking of you" text to a friend.', 
    why: 'This small act of social connection releases oxytocin, the "bonding hormone," boosting your own happiness.',
    image: friendImage 
  },
  { 
    id: 10, 
    category: 'Connection & Joy', 
    text: 'Play with your pet for 5 minutes.', 
    why: 'Interaction with animals is proven to lower blood pressure and flood your brain with mood-boosting endorphins.',
    image: petImage 
  },
  { 
    id: 11, 
    category: 'Connection & Joy', 
    text: 'Feed birds or other local animals.', 
    why: 'Fosters a sense of purpose and connection to the world around you through a simple act of nurturing.',
    image: birdsImage 
  },
  { 
    id: 12, 
    category: 'Connection & Joy', 
    text: 'Watch a music video from a favorite artist.', 
    why: 'Music and visuals are a potent combination for shifting your mood and giving you a jolt of pure energy.',
    image: musicImage 
  },
  { 
    id: 13, 
    category: 'Connection & Joy', 
    text: 'Plan one small, fun thing to look forward to.', 
    why: "The act of anticipating a positive event can be as pleasurable as the event itself. It's a free mood boost.",
    image: planImage 
  },
  { 
    id: 14, 
    category: 'Connection & Joy', 
    text: "Write a positive comment on a creator's post.", 
    why: "Putting good energy out into the world feels good. It's a small act that makes both you and someone else smile.",
    image: shareImage 
  },

  // Category 3: Creative Momentum
  { 
    id: 15, 
    category: 'Creative Momentum', 
    text: 'Write down the single next physical action for your main task.', 
    why: 'The ultimate procrastination killer. It transforms a giant, scary task into one small, easy first step.',
    image: writeImage 
  },
  { 
    id: 16, 
    category: 'Creative Momentum', 
    text: 'Put your phone in another room for 15 minutes.', 
    why: 'Breaks the cycle of constant notifications and reclaims your focus. Creating intentional space from your phone is a powerful act of self-control.',
    image: unplugImage 
  },
  { 
    id: 17, 
    category: 'Creative Momentum', 
    text: 'Listen to one high-energy song from start to finish.', 
    why: 'Uses rhythm and tempo to directly influence your energy level, acting as a mental "starting gun" for your next task.',
    image: energyImage 
  },
  { 
    id: 18, 
    category: 'Creative Momentum', 
    text: 'Cook a small, fun snack.', 
    why: "A simple, creative task with a tangible (and delicious) reward. It's a perfect, low-stakes 'win.'",
    image: cookImage 
  },
  { 
    id: 20, 
    category: 'Creative Momentum', 
    text: 'Collect a flower or an interesting leaf from outside.', 
    why: 'Engages your sense of curiosity and appreciation for beauty, shifting your brain out of a "work" rut.',
    image: flowerImage 
  },
  { 
    id: 21, 
    category: 'Creative Momentum', 
    text: 'Brainstorm 3 "bad" ideas for your current problem.', 
    why: 'Removes the pressure of finding the "perfect" solution. This fun exercise can surprisingly lead to an innovative breakthrough.',
    image: ideaImage 
  },

  // Category 4: Sensory & Mindful Calm
  { 
    id: 19, 
    category: 'Sensory & Mindful Calm', 
    text: 'Play a mindful game for 5 minutes.', 
    why: 'Engages your brain in a low-stakes, focused task, providing a mental refresh and a quick sense of accomplishment.',
    image: gameImage 
  },
  { 
    id: 22, 
    category: 'Sensory & Mindful Calm', 
    text: 'Mindfully brew a cup of tea or coffee.', 
    why: 'The ritual of preparing a warm drink engages multiple senses and acts as a calming, deliberate anchor in your day.',
    image: teaImage 
  },
  { 
    id: 23, 
    category: 'Sensory & Mindful Calm', 
    text: 'Listen to 3 minutes of calming sounds.', 
    why: 'Creates a personal bubble of tranquility. It shields you from distracting noise and guides your mind to a calmer state.',
    image: soundsImage 
  },
  { 
    id: 24, 
    category: 'Sensory & Mindful Calm', 
    text: 'Write one sentence in a journal about how you feel.', 
    why: 'Naming an emotion helps to process it. This simple act acknowledges your feelings without judgment, reducing their power.',
    image: journalImage 
  },
  { 
    id: 25, 
    category: 'Sensory & Mindful Calm', 
    text: 'Read one page of a book or a short poem.', 
    why: 'Offers a micro-escape for your mind, engaging your imagination in a gentle, structured way.',
    image: readImage 
  },
  { 
    id: 26, 
    category: 'Sensory & Mindful Calm', 
    text: 'Light a favorite candle or use an oil diffuser.', 
    why: "Scent has a direct link to the brain's memory and emotion centers, capable of instantly creating a tranquil atmosphere.",
    image: candleImage 
  },
  { 
    id: 27, 
    category: 'Sensory & Mindful Calm', 
    text: 'Look at a photo of a happy memory for 1 minute.', 
    why: 'Reconnects you with authentic feelings of joy and gratitude, reminding you of the good things in your life.',
    image: photoImage 
  },
  { 
    id: 28, 
    category: 'Sensory & Mindful Calm', 
    text: 'Gently massage your hands with lotion.', 
    why: 'Brings awareness and relief to an often-neglected area, releasing physical tension and promoting relaxation.',
    image: relaxImage 
  }
];