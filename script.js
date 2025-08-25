// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'light') {
  body.classList.add('light-theme');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
});

// Click sound
const clickSound = document.getElementById('clickSound');
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    clickSound.currentTime = 0; // reset if spam clicked
    clickSound.play();
  });
});

// Highlight active section in navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 80;
    if (scrollY >= secTop) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});