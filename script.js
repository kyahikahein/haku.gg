// --- Theme toggle functionality ---
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const backBtn = document.querySelector('.back-btn');

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

// Apply initial theme
if (initialTheme === 'light') {
  body.classList.add('light-theme');
  body.classList.remove('dark-theme');
  if (themeToggle) themeToggle.checked = true;
  if (backBtn) backBtn.classList.add('light-btn');
} else {
  body.classList.add('dark-theme');
  body.classList.remove('light-theme');
  if (themeToggle) themeToggle.checked = false;
  if (backBtn) backBtn.classList.add('dark-btn');
}

// Theme toggle listener
if (themeToggle) {
  themeToggle.addEventListener('change', function() {
    body.classList.add('theme-transition');
    if (this.checked) {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
      if (backBtn) {
        backBtn.classList.add('light-btn');
        backBtn.classList.remove('dark-btn');
      }
    } else {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
      if (backBtn) {
        backBtn.classList.add('dark-btn');
        backBtn.classList.remove('light-btn');
      }
    }
    setTimeout(() => body.classList.remove('theme-transition'), 480);
  });
}

// --- Typing effect ---
(function() {
  const nameEl = document.getElementById('typedName');
  if (!nameEl) return;
  const key = 'typedName-played';
  if (sessionStorage.getItem(key)) return;
  
  const fullText = nameEl.textContent;
  nameEl.textContent = '';
  let idx = 0;
  const typeSpeedMs = 100;

  const typer = () => {
    if (idx <= fullText.length) {
      nameEl.textContent = fullText.slice(0, idx);
      idx++;
      setTimeout(typer, typeSpeedMs);
    } else {
      sessionStorage.setItem(key, '1');
    }
  };
  typer();
})();
