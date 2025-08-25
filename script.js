// Quotes
const rdr2Quotes = [
  "Arthur Morgan: 'We can't change what's done, we can only move on.'",
  "Dutch van der Linde: 'We are more ghosts than people.'",
  "Hosea Matthews: 'I wish I'd acquired wisdom at less of a price.'",
  "Micah Bell: 'I don't want to kill you, John.'",
  "John Marston: 'Arthur saved my life, more than once.'"
];

const aotQuotes = [
  "Eren Yeager: 'If you win, you live. If you lose, you die.'",
  "Mikasa Ackerman: 'In a world full of darkness, you are my only light.'",
  "Levi Ackerman: 'Sometimes you must become a monster to protect those you love.'",
  "Armin Arlert: 'It doesn't matter how hard the past was, you can always start over.'",
  "Eren Yeager: 'We’re born free. All of us, free.'"
];

const vinlandQuotes = [
  "Thors: 'You have no enemies. No one has enemies.'",
  "Askeladd: 'A man, slave to gold, holds a whip...'",
  "Thorfinn: 'I have no enemies.'",
  "Canute: 'Why is there no love in the hearts of men?'",
  "Thors: 'The future is often forged in the crucible of uncertainty.'"
];

const unknownQuotes = [
  "Why can't people just understand 'no'? It's so simple yet so hard for some.",
  "They keep repeating the same irritating behavior over and over.",
  "It’s exhausting when others refuse to respect your boundaries.",
  "How will they handle rejection if they can't accept a clear 'no'?",
  "Sometimes you just need them to stop being annoying and listen.",
  "Protecting your peace means enforcing limits, no matter what.",
  "Repeated disrespect is draining; set boundaries firmly."
];

// Quote Rotator
let index = 0;
let category = 0; // 0: RDR2, 1: AOT, 2: Vinland, 3: Unknown
const quoteEl = document.getElementById('quote');
const nextBtn = document.getElementById('nextQuoteBtn');

function playClickSound() {
  const audio = new Audio('https://www.soundjay.com/button/beep-07.mp3');
  audio.play();
}

function showQuote() {
  let quotes;
  if(category === 0) quotes = rdr2Quotes;
  else if(category === 1) quotes = aotQuotes;
  else if(category === 2) quotes = vinlandQuotes;
  else quotes = unknownQuotes;

  quoteEl.textContent = quotes[index % quotes.length];
}

nextBtn.addEventListener('click', () => {
  playClickSound();
  index++;
  let currentQuotes;
  if(category === 0) currentQuotes = rdr2Quotes;
  else if(category === 1) currentQuotes = aotQuotes;
  else if(category === 2) currentQuotes = vinlandQuotes;
  else currentQuotes = unknownQuotes;

  if(index >= currentQuotes.length) {
    index = 0;
    category = (category + 1) % 4; // cycle through categories
  }

  showQuote();
});

showQuote();

// Collapsible Music Section
const musicSection = document.querySelector('.music-section');
const musicHeader = musicSection.querySelector('h2');
musicHeader.addEventListener('click', () => {
  musicSection.classList.toggle('collapsed');
});
