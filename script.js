// Matrix Rain Effect
class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrix-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        this.drops = [];
        this.fontSize = 10;
        
        this.setupCanvas();
        this.setupDrops();
        this.animate();
    }
    
    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.setupDrops();
        });
    }
    
    setupDrops() {
        const columns = this.canvas.width / this.fontSize;
        this.drops = [];
        for (let x = 0; x < columns; x++) {
            this.drops[x] = 1;
        }
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff00';
        this.ctx.font = this.fontSize + 'px monospace';
        
        for (let i = 0; i < this.drops.length; i++) {
            const text = this.matrix[Math.floor(Math.random() * this.matrix.length)];
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Theme System
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('haku-theme') || 'dark';
        this.themes = ['dark', 'light', 'matrix', 'retro', 'sunset'];
        this.init();
    }
    
    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.playSound('click');
                const theme = e.target.dataset.theme;
                this.applyTheme(theme);
            });
        });
    }
    
    applyTheme(theme) {
        // Remove all theme classes
        document.body.classList.remove('light-theme', 'matrix-theme', 'retro-theme', 'sunset-theme');
        
        // Apply new theme
        if (theme !== 'dark') {
            document.body.classList.add(`${theme}-theme`);
        }
        
        this.currentTheme = theme;
        localStorage.setItem('haku-theme', theme);
        
        // Update active button
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
        
        console.log(`Theme changed to: ${theme}`);
    }
    
    playSound(type) {
        // Create audio context for sound effects
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        if (type === 'click') {
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        } else if (type === 'pop') {
            oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.2);
        }
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }
}

// Sound Effects for Links
function addSoundEffects() {
    // Click sounds for all links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            themeManager.playSound('click');
            
            // Pop sound for external links
            if (link.target === '_blank' || link.href.includes('http')) {
                setTimeout(() => {
                    themeManager.playSound('pop');
                }, 100);
                showSoundIndicator();
            }
        });
    });
    
    // Click sound for theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showSoundIndicator();
        });
    });
}

// Sound indicator
function showSoundIndicator() {
    const indicator = document.getElementById('soundIndicator');
    indicator.classList.add('show');
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 1000);
}

// Typing Animation
class TypingEffect {
    constructor() {
        this.element = document.getElementById('typingText');
        this.words = ['haku', 'a student', 'an IoT enthusiast', 'learning math', 'coding'];
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.start();
    }
    
    start() {
        setTimeout(() => this.type(), 500);
    }
    
    type() {
        const currentWord = this.words[this.wordIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let typeSpeed = 100;
        
        if (this.isDeleting) typeSpeed = 50;
        
        if (!this.isDeleting && this.charIndex === currentWord.length) {
            typeSpeed = 1500;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            typeSpeed = 300;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize everything
let matrixRain;
let themeManager;
let typingEffect;

window.addEventListener('load', () => {
    matrixRain = new MatrixRain();
    themeManager = new ThemeManager();
    typingEffect = new TypingEffect();
    addSoundEffects();
});
