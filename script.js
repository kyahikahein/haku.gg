const body = document.body;
let savedTheme = 'dark';
let aboutWindow = null;
let contactWindow = null;
let isDragging = false;
let currentX = 0;
let currentY = 0;
let initialX = 0;
let initialY = 0;
let currentWindow = null;

function applyTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  } else {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  }
}

function toggleTheme() {
  const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  applyTheme(newTheme);
  savedTheme = newTheme;
}

applyTheme(savedTheme);

const kikiCat = document.getElementById('kikiCat');
const catSpeech = document.getElementById('catSpeech');

if (kikiCat && catSpeech) {
  const darkPhrases = [
    'nya~ switching to dark mode!', 'dark side activated!', 'welcome to the shadows~', 
    'meow! dark theme is cozy!', 'purr purr~ night mode on!', 'dark navy vibes!',
    'switching themes like a ninja cat!', 'darkness my old friend~', 'cozy dark mode!'
  ];
  
  const lightPhrases = [
    'nya~ light mode activated!', 'bright and beautiful!', 'sunshine mode on!',
    'meow! light theme is fresh!', 'purr purr~ daytime vibes!', 'light blue skies!',
    'switching to brightness!', 'hello sunshine~', 'light mode engaged!'
  ];
  
  const regularPhrases = [
    'click me to change theme!', 'nya~', 'purr purr~', 'meow!', 'hello human!', 'pet me!',
    'i love you!', 'mrow~', 'nice website!', 'keep coding!', 'take a break!',
    'stretch time!', 'drink water!', 'good job!', 'uwu', 'sleepy...',
    'play with me!', 'so cozy here~', 'paw paw~', 'lick lick~', 'ghibli vibes!',
    'magical~', 'forest spirit!', 'totoro friend!', 'coding buddy!', 'stay hydrated!'
  ];

  let isAnimating = false;

  function showRandomPhrase(phrases = regularPhrases) {
    if (isAnimating) return;
    
    isAnimating = true;
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    catSpeech.textContent = randomPhrase;
    kikiCat.classList.add('speaking');
    
    setTimeout(() => {
      kikiCat.classList.remove('speaking');
      isAnimating = false;
    }, 2500);
  }

  kikiCat.addEventListener('click', function() {
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    
    toggleTheme();
    
    if (currentTheme === 'dark') {
      showRandomPhrase(lightPhrases);
    } else {
      showRandomPhrase(darkPhrases);
    }
  });
  
  setInterval(() => {
    if (!isAnimating && Math.random() < 0.25) {
      showRandomPhrase(regularPhrases);
    }
  }, 20000);

  kikiCat.addEventListener('mouseenter', () => {
    if (!isAnimating && Math.random() < 0.4) {
      showRandomPhrase(regularPhrases);
    }
  });
}

(function() {
  const nameEl = document.getElementById('hakuLink');
  if (!nameEl) return;
  
  let typedNamePlayed = false;
  if (typedNamePlayed) return;
  
  const fullText = nameEl.textContent;
  nameEl.textContent = '';
  let idx = 0;
  const typeSpeedMs = 120;

  const typer = () => {
    if (idx <= fullText.length) {
      nameEl.textContent = fullText.slice(0, idx);
      idx++;
      setTimeout(typer, typeSpeedMs);
    } else {
      typedNamePlayed = true;
    }
  };
  
  setTimeout(typer, 500);
})();

function createAboutWindow() {
  if (aboutWindow) return;
  
  document.body.classList.add('no-scroll');
  
  aboutWindow = document.createElement('div');
  aboutWindow.className = 'about-window';
  aboutWindow.innerHTML = `
    <div class="window-header" id="aboutWindowHeader">
      <span class="window-title">about</span>
      <span class="close-btn" id="aboutCloseBtn">[×]</span>
    </div>
    <div class="window-content">
      <div class="profile-section">
        <img src="https://pbs.twimg.com/profile_images/1961017381423386625/9m6XriRP_400x400.jpg" alt="Profile" class="profile-image">
        <div class="profile-info">
          <h3 class="profile-name haku-text">Haku 葉子林</h3>
          <p class="profile-subtitle">Student, IoT & Electronics enthusiast</p>
          <p class="profile-description">Preparing for IIITH LEEE ECD</p>
        </div>
      </div>
      
      <div class="about-content">
        <p>Hi! I'm <span class="haku-text">Haku</span>, a student and developer passionate about:</p>
        
        <ul class="skills-list">
          <li>creating <span class="highlight">IoT solutions</span></li>
          <li>building <span class="highlight">web applications</span> with modern tech</li>
          <li>developing electronics projects</li>
          <li>problem solving with mathematics!</li>
        </ul>
        
        <div class="additional-info">
          <p>Currently learning IoT, electronics, and preparing for competitive exams.</p>
          <p>Love doing maths and building cool projects in my free time!</p>
          <p>Always excited to connect with fellow developers and learners.</p>
          
          <div class="contact-methods">
            <a href="mailto:dhanrazx@proton.me" class="contact-method">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div class="contact-info">
                <h4>Email</h4>
                <p>dhanrazx@proton.me</p>
              </div>
            </a>
            
            <a href="https://github.com/kyahikahein" target="_blank" class="contact-method">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div class="contact-info">
                <h4>GitHub</h4>
                <p>@kyahikahein</p>
              </div>
            </a>
            
            <a href="https://x.com/dhanrazx" target="_blank" class="contact-method">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div class="contact-info">
                <h4>X (Twitter)</h4>
                <p>@dhanrazx</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(aboutWindow);
  
  const header = aboutWindow.querySelector('#aboutWindowHeader');
  const closeBtn = aboutWindow.querySelector('#aboutCloseBtn');
  
  closeBtn.addEventListener('click', closeAboutWindow);
  header.addEventListener('mousedown', (e) => dragStart(e, aboutWindow));
  
  setTimeout(() => {
    aboutWindow.classList.add('visible');
  }, 10);
}

function createContactWindow() {
  if (contactWindow) return;
  
  document.body.classList.add('no-scroll');
  
  contactWindow = document.createElement('div');
  contactWindow.className = 'contact-window';
  contactWindow.innerHTML = `
    <div class="window-header" id="contactWindowHeader">
      <span class="window-title">contact</span>
      <span class="close-btn" id="contactCloseBtn">[×]</span>
    </div>
    <div class="window-content">
      <div class="contact-content">
        <p>Let's connect! Reach out through any of these:</p>
        
        <div class="contact-methods">
          <a href="mailto:dhanrazx@proton.me" class="contact-method">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div class="contact-info">
              <h4>Email</h4>
              <p>dhanrazx@proton.me</p>
            </div>
          </a>
          
          <a href="https://github.com/kyahikahein" target="_blank" class="contact-method">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div class="contact-info">
              <h4>GitHub</h4>
              <p>@kyahikahein</p>
            </div>
          </a>
          
          <a href="https://x.com/dhanrazx" target="_blank" class="contact-method">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div class="contact-info">
              <h4>X (Twitter)</h4>
              <p>@dhanrazx</p>
            </div>
          </a>
        </div>
        
        <div class="additional-info">
          <p>Always interested in discussing projects, collaborations, or tech chats!</p>
          <p>Response time: 24-48 hours. Looking forward to hearing from you!</p>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(contactWindow);
  
  const header = contactWindow.querySelector('#contactWindowHeader');
  const closeBtn = contactWindow.querySelector('#contactCloseBtn');
  
  closeBtn.addEventListener('click', closeContactWindow);
  header.addEventListener('mousedown', (e) => dragStart(e, contactWindow));
  
  setTimeout(() => {
    contactWindow.classList.add('visible');
  }, 10);
}

function closeAboutWindow() {
  if (!aboutWindow) return;
  
  document.body.classList.remove('no-scroll');
  
  aboutWindow.classList.remove('visible');
  setTimeout(() => {
    if (aboutWindow && aboutWindow.parentNode) {
      aboutWindow.parentNode.removeChild(aboutWindow);
      aboutWindow = null;
    }
  }, 400);
}

function closeContactWindow() {
  if (!contactWindow) return;
  
  document.body.classList.remove('no-scroll');
  
  contactWindow.classList.remove('visible');
  setTimeout(() => {
    if (contactWindow && contactWindow.parentNode) {
      contactWindow.parentNode.removeChild(contactWindow);
      contactWindow = null;
    }
  }, 400);
}

function dragStart(e, window) {
  if (e.target.closest('.close-btn')) return;
  
  currentWindow = window;
  const rect = window.getBoundingClientRect();
  initialX = e.clientX - rect.left;
  initialY = e.clientY - rect.top;
  
  if (e.target === e.currentTarget) {
    isDragging = true;
    window.style.cursor = 'grabbing';
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
  }
}

function dragMove(e) {
  if (isDragging && currentWindow) {
    e.preventDefault();
    const newX = e.clientX - initialX;
    const newY = e.clientY - initialY;
    
    const maxX = window.innerWidth - currentWindow.offsetWidth;
    const maxY = window.innerHeight - currentWindow.offsetHeight;
    const constrainedX = Math.max(0, Math.min(newX, maxX));
    const constrainedY = Math.max(0, Math.min(newY, maxY));
    
    currentWindow.style.left = constrainedX + 'px';
    currentWindow.style.top = constrainedY + 'px';
    currentWindow.style.transform = 'none';
  }
}

function dragEnd() {
  isDragging = false;
  if (currentWindow) {
    currentWindow.style.cursor = 'grab';
  }
  currentWindow = null;
  document.removeEventListener('mousemove', dragMove);
  document.removeEventListener('mouseup', dragEnd);
}

document.addEventListener('DOMContentLoaded', function() {
  const aboutBtn = document.getElementById('aboutBtn');
  const hakuLink = document.getElementById('hakuLink');
  
  if (aboutBtn) {
    aboutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      createAboutWindow();
    });
  }
  
  if (hakuLink) {
    hakuLink.addEventListener('click', function(e) {
      e.preventDefault();
      createAboutWindow();
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

const AVAILABLE_FONTS = {
  'Cormorant Garamond': "'Cormorant Garamond', serif",
  'Courier New': "'Courier New', monospace",
  'Monaco': "'Monaco', monospace", 
  'Fira Code': "'Fira Code', monospace",
  'JetBrains Mono': "'JetBrains Mono', monospace",
  'Source Code Pro': "'Source Code Pro', monospace"
};

let selectedFont = 'Cormorant Garamond';

function applyFont(fontName) {
  const fontFamily = AVAILABLE_FONTS[fontName] || AVAILABLE_FONTS['Cormorant Garamond'];
  document.documentElement.style.setProperty('--main-font', fontFamily);
  selectedFont = fontName;
  
  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => {
    element.style.fontFamily = fontFamily + ' !important';
  });
}

applyFont(selectedFont);

document.addEventListener('keydown', function(e) {
  if (e.altKey && e.key === 'a') {
    e.preventDefault();
    createAboutWindow();
  }
  
  if (e.key === 'Escape') {
    if (aboutWindow) closeAboutWindow();
    if (contactWindow) closeContactWindow();
  }
  
  if (e.ctrlKey && e.shiftKey && e.key === 'F') {
    e.preventDefault();
    const fontSelector = document.getElementById('fontSelector');
    fontSelector.classList.toggle('active');
  }
  
  if (e.ctrlKey && e.key === 't') {
    e.preventDefault();
    toggleTheme();
  }
});

console.log('%cHaku Website Developer Console', 'color: #ffffff; font-size: 16px; font-weight: bold;');
console.log('%cAvailable commands:', 'color: #ffffff; font-size: 14px;');
console.log('• applyFont("FontName") - Change site font');
console.log('• Available fonts: Cormorant Garamond, Courier New, Monaco, Fira Code, JetBrains Mono, Source Code Pro');
console.log('• toggleTheme() - Toggle between light and dark theme');
console.log('• document.getElementById("fontSelector").classList.add("active") - Show font selector');
console.log('• Keyboard shortcuts: Alt+A (about), Esc (close), Ctrl+Shift+F (fonts), Ctrl+T (theme)');
console.log('• Click the cat to toggle theme!');

let konamiCode = [];
const konamiSequence = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
  konamiCode.push(e.code);
  konamiCode = konamiCode.slice(-konamiSequence.length);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    if (kikiCat && catSpeech) {
      catSpeech.textContent = 'konami code! you found the secret! ✨';
      kikiCat.classList.add('speaking');
      kikiCat.style.animation = 'catBreathe 0.3s ease-in-out 10';
      setTimeout(() => {
        kikiCat.classList.remove('speaking');
        kikiCat.style.animation = 'catBreathe 4s ease-in-out infinite';
      }, 3000);
    }
    
    console.log('%c🎉 KONAMI CODE ACTIVATED! 🎉', 'color: #ffffff; font-size: 20px; font-weight: bold;');
    console.log('%cYou found the secret! Keep exploring and coding! 🚀', 'color: #cccccc; font-size: 14px;');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('%cPage loaded successfully! 🎉', 'color: #cccccc; font-size: 14px;');
  
  const elements = document.querySelectorAll('.section, .about-section');
  elements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100 * (index + 1));
  });
});