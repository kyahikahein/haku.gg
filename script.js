// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme
if (currentTheme === 'light') {
body.classList.add('light-theme');
themeToggle.checked = true;
}

// Toggle theme on checkbox change
themeToggle.addEventListener('change', function() {
if (this.checked) {
body.classList.add('light-theme');
localStorage.setItem('theme', 'light');
} else {
body.classList.remove('light-theme');
localStorage.setItem('theme', 'dark');
}
});

