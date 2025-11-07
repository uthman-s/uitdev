// Adding language switching functionality

let currentLanguage = 'en';
const languages = {
    en: { greeting: 'Hello' },
    es: { greeting: 'Hola' },
};

function switchLanguage(lang) {
    if (languages[lang]) {
        currentLanguage = lang;
        updateContent();
    }
}

function updateContent() {
    const greeting = languages[currentLanguage].greeting;
    document.getElementById('greeting').innerText = greeting;
}

// Initial content update
updateContent();

// Example usage: Switch to Spanish
// switchLanguage('es');