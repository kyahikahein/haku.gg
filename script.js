// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Determine initial theme: saved preference or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

// Apply initial theme and toggle state
if (initialTheme === 'light') {
  body.classList.add('light-theme');
  if (themeToggle) themeToggle.checked = true;
} else {
  body.classList.remove('light-theme');
  if (themeToggle) themeToggle.checked = false;
}

// Toggle theme on checkbox change
if (themeToggle) {
  themeToggle.addEventListener('change', function() {
    body.classList.add('theme-transition');
    if (this.checked) {
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
    window.setTimeout(() => body.classList.remove('theme-transition'), 480);
  });
}

// Typing effect for first visit or reload
(function() {
  const nameEl = document.getElementById('typedName');
  if (!nameEl) return;
  const key = 'typedName-played';
  const hasPlayed = sessionStorage.getItem(key);
  if (hasPlayed) return;
  const fullText = nameEl.textContent;
  nameEl.textContent = '';
  let idx = 0;
  const typeSpeedMs = 100;
  const typer = () => {
    if (idx <= fullText.length) {
      nameEl.textContent = fullText.slice(0, idx);
      idx += 1;
      window.setTimeout(typer, typeSpeedMs);
    } else {
      sessionStorage.setItem(key, '1');
    }
  };
  typer();
})();
