// Data for the 99 Names of Allah
const namesOfAllah = [{
  arabic: "الرَّحْمَنُ",
  english: "Ar-Rahman",
  meaningArabic: "الرحمن",
  meaningEnglish: "The Most Gracious"
},
  {
    arabic: "الرَّحِيمُ",
    english: "Ar-Rahim",
    meaningArabic: "الرحيم",
    meaningEnglish: "The Most Merciful"
  },
  {
    arabic: "الْمَلِكُ",
    english: "Al-Malik",
    meaningArabic: "الملك",
    meaningEnglish: "The King"
  },
  // Add the remaining 96 names here...
];

// Function to create name cards
function createNameCards() {
  const container = document.querySelector('.names-container');
  namesOfAllah.forEach(name => {
    const card = document.createElement('div');
    card.classList.add('name-card');

    card.innerHTML = `
    <h2>${name.arabic}</h2>
    <p><strong>English:</strong> ${name.english}</p>
    <p><strong>Meaning (Arabic):</strong> ${name.meaningArabic}</p>
    <p><strong>Meaning (English):</strong> ${name.meaningEnglish}</p>
    <button class="search-button" onclick="searchName('${name.english}')">Search on Google</button>
    `;

    container.appendChild(card);
  });
}

// Function to search for a name on Google
function searchName(name) {
  window.open(`https://www.google.com/search?q=${name}+Name+of+Allah`, '_blank');
}

// Function to toggle dark/light mode
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Event listener for theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Initialize the page
createNameCards();