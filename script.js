// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const clickSound = document.getElementById("clickSound");

// Load saved theme
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light-theme');
  themeToggle.checked = true;
}

// Toggle theme
themeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
});

// Click sound for all links
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});