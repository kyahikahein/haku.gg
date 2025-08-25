// Typing animation
const typingText = document.getElementById('typingText');
const words = ['haku', 'a student', 'an IoT enthusiast', 'learning math', 'coding'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed = 50;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 300; // Pause before next word
    }
    
    setTimeout(typeEffect, typeSpeed);
}

// Start typing animation after page loads
window.addEventListener('load', () => {
    setTimeout(typeEffect, 500);
});


const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light-theme', themeToggle.checked);
});
