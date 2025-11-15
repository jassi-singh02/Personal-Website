// Essay data structure
const essays = [
  {
    title: "My College Essay",
    content: [
      "If you take a look at my desk and PC, you would swear that I am an obsessive nerd with a strange affinity for lists. On my browser's bookmarks bar, there is a collection of categorized folders jam-packed with links leading to content to indulge. This is where I keep my lists of albums to listen to, movies to watch, art to see, books to read, and so on. Each submission to those lists receives a proper five minutes of research. This is all part of a mindset that I like to call vicarious living. Vicarious, being defined as \"lived in the imagination of the experience of others\", is a word that defines my approach to life.",
      "Music, a medium of audio, is one part of that vicarious experience. On Saturday afternoons, I look forward to sitting at my desk with my PC turned on, Spotify opened, and headphones ready. This is where I get to curate playlists and appreciate the music I am listening to. It's where I get to explore over 10 different ways to experience sadness, whether that be Joy Division's exploration of rock bottom through grimy, bare post-punk, or Wilco's bittersweet lamentation through their fusion of alt-rock and country. Not only do I get to understand my emotions in a deeper sense, but I get to explore new feelings through music. Beethoven's 9th Symphony, a towering piece of music, instills a feeling of humanity and brotherhood that I didn't know I carried. Imagination allows me to make connections and thoughts with the music I listen to, creating new feelings and moods to discover.",
      "Movies, a medium with audio and visuals, give a different form of vicarious experience. My imagination revels over the scenes, settings, and images film provides. In 2001: A Space Odyssey, human evolution and space exploration are depicted through Kubrick's excellent pairing of grandiose music and sleek visuals. Scenes of early man developing tools and modern humans gliding among the stars in elegant, gargantuan spaceships are stored in my mind giving me a sense of human transcendence. In Taxi Driver, I can see through the perspective of a social outcast in the character Travis Bickle. I vicariously experience the pitfalls of loneliness and viewpoints of cynicism. With this, I start to understand my feelings and learn where to move away from this moral descent. By thoughtfully viewing film, I gain a different perspective to view reality and a deeper understanding of myself.",
      "Literature, a medium of just words, gives another form of vicarious experience in how it communicates ideas and thoughts. Over my quarantine period, I got to read the book 1984, an acclaimed classic, in my free time. 1984 paints a gut-wrenching image of the dangers of totalitarianism and the pitfalls of censorship. Through this book, I picked up on a subtle, but important idea Orwell communicates. In this book, the ruling government reduces the number of words in each subsequent dictionary edition. The implication that arises from this is that language dictates thought; there are certain thoughts that we can't think of because we don't have the words for them. This sparked a realization that changed my approach to life. The music that we listen to, the films that we watch, the people that we talk to, the places that we go, and the content that we consume forms our sense of reality.",
      "Possibilities of who I can be and my sense of reality are expanded by what I expose myself to and choose to analyze. The world is too vast for our minds to comprehend; there are a multitude of perspectives to understand and an infinite number of topics to explore. With higher education and the age of the Internet, I have a wide, easy-to-access range of possibilities to explore. My overall approach to life, supplemented by vicarious living, gives me a fuller sense of reality and a step towards self-actualization."
    ]
  },
  {
    title: "Reflections on Digital Culture",
    content: [
      "In an age where digital interfaces mediate our every interaction, I find myself constantly navigating the tension between connection and isolation. Social media platforms promise community, yet often deliver curated performances of self. Each scroll through a feed becomes a negotiation between authentic expression and algorithmic optimization. This paradox has shaped my understanding of contemporary identity, where the self exists simultaneously in physical and digital spaces.",
      "The immediacy of digital communication has transformed how we process information and form opinions. Where once we had time to reflect, we now react in real-time. This acceleration has compressed our attention spans and redefined what constitutes meaningful discourse. I've observed how discussions that might once have unfolded over weeks in print now happen in seconds, often losing nuance in the process.",
      "Yet within this rapid-fire environment, I've discovered pockets of genuine engagement. Online communities centered around shared passions—whether obscure music genres, philosophical debates, or artistic movements—have allowed me to connect with minds I might never encounter in my immediate physical world. These digital spaces become laboratories for thought, where ideas can be tested, refined, and challenged by diverse perspectives.",
      "The challenge, then, is not to reject digital culture wholesale, but to approach it with intentionality. I've learned to curate my digital experience actively rather than passively consume what algorithms serve. This means seeking out sources that challenge my assumptions, engaging with long-form content that demands sustained attention, and creating rather than just consuming. In doing so, I've transformed my relationship with technology from one of dependence to one of partnership.",
      "As I move forward, I carry with me the understanding that our tools shape us as much as we shape them. The question isn't whether to engage with digital culture, but how to do so in a way that enriches rather than diminishes our humanity. It requires constant vigilance, regular reflection, and a commitment to maintaining the depth of thought that makes us more than just nodes in a network."
    ]
  },
  {
    title: "The Art of Listening",
    content: [
      "There is a profound difference between hearing and listening. Over the past few years, I've come to realize that listening—truly listening—is among the most undervalued skills in our fast-paced world. It requires setting aside our own agenda, quieting the internal monologue, and creating space for another's perspective to fully emerge. This practice has fundamentally altered how I engage with people, ideas, and experiences.",
      "My journey into deeper listening began through music. Initially, I consumed songs casually, letting them wash over me as background noise. But something shifted when I started paying attention to the layers—the way a bassline establishes rhythm while a melody weaves emotional narrative, how harmony creates tension and resolution, the subtle choices in production that shape our emotional response. This active listening transformed passive consumption into active discovery.",
      "This approach extended beyond music to conversations. I noticed how often we listen with the intent to reply rather than to understand. We formulate responses while others speak, missing the nuance of what they're actually communicating. When I began practicing true listening—holding space without immediately interjecting—I discovered that people have remarkable depth when given the opportunity to fully express themselves. Stories emerged that might have remained hidden beneath surface-level exchanges.",
      "Listening has also reshaped my relationship with art and literature. Where I once might have rushed through a novel or glanced quickly at a painting, I now spend time absorbing details, considering context, and allowing meaning to emerge gradually. This slower, more intentional approach reveals layers of complexity that initially escape notice. A single chapter can unfold multiple narratives; a single image can contain entire philosophies.",
      "Perhaps most importantly, listening has taught me humility. By truly hearing others—whether through their words, their art, or their silence—I've recognized the limitations of my own perspective. Every person carries experiences and insights I cannot access except through genuine attention. This recognition has made me a better collaborator, a more thoughtful friend, and a more open learner. In a world that often values speaking over listening, I've found power in the quiet practice of paying attention."
    ]
  }
];

// Initialize the essay menu
function initEssayMenu() {
  const menuContainer = document.getElementById('essayMenu');
  
  // Create a tab for each essay
  essays.forEach((essay, index) => {
    // Create tab container
    const tab = document.createElement('div');
    tab.className = 'essay-tab';
    tab.setAttribute('data-index', index);
    
    // Create tab header (clickable)
    const header = document.createElement('div');
    header.className = 'essay-tab-header';
    header.innerHTML = `
      <span>${essay.title}</span>
      <span class="essay-tab-arrow">▼</span>
    `;
    
    // Create tab content (collapsible)
    const content = document.createElement('div');
    content.className = 'essay-tab-content';
    
    // Create essay content structure
    const essayContent = document.createElement('div');
    essayContent.className = 'essay-content';
    
    const title = document.createElement('h1');
    title.textContent = essay.title;
    essayContent.appendChild(title);
    
    // Add paragraphs
    essay.content.forEach(paragraphText => {
      const p = document.createElement('p');
      p.textContent = paragraphText;
      essayContent.appendChild(p);
    });
    
    content.appendChild(essayContent);
    
    // Add click event to header to toggle content
    header.addEventListener('click', () => {
      toggleEssay(index);
    });
    
    // Assemble tab
    tab.appendChild(header);
    tab.appendChild(content);
    
    // Add to menu
    menuContainer.appendChild(tab);
  });
}

// Toggle essay dropdown
function toggleEssay(index) {
  const tab = document.querySelector(`.essay-tab[data-index="${index}"]`);
  const header = tab.querySelector('.essay-tab-header');
  const content = tab.querySelector('.essay-tab-content');
  
  // Check if currently active
  const isActive = header.classList.contains('active');
  
  // Close all essays first (optional - remove if you want multiple open)
  // If you want only one open at a time, uncomment the next few lines:
  // document.querySelectorAll('.essay-tab-header').forEach(h => {
  //   h.classList.remove('active');
  // });
  // document.querySelectorAll('.essay-tab-content').forEach(c => {
  //   c.classList.remove('active');
  // });
  
  // Toggle current essay
  if (isActive) {
    header.classList.remove('active');
    content.classList.remove('active');
  } else {
    header.classList.add('active');
    content.classList.add('active');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initEssayMenu);
