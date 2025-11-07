// Language Switching Functionality
document.addEventListener('DOMContentLoaded', function(){
  // Set current year
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // Language switching
  var currentLang = localStorage.getItem('lang') || 'en';
  var langSelect = document.getElementById('langSelect');
  
  // Set initial language based on browser or localStorage
  if(!localStorage.getItem('lang')) {
    var browserLang = navigator.language.split('-')[0];
    if(browserLang === 'da') {
      currentLang = 'da';
    }
  }
  
  // Apply initial language
  setLanguage(currentLang);
  
  // Set the dropdown to the current language
  if(langSelect) {
    langSelect.value = currentLang;
    
    // Language select change handler
    langSelect.addEventListener('change', function(){
      currentLang = langSelect.value;
      localStorage.setItem('lang', currentLang);
      setLanguage(currentLang);
    });
  }
});

function setLanguage(lang) {
  var elements = document.querySelectorAll('[data-en][data-da]');
  
  elements.forEach(function(el) {
    if(lang === 'en') {
      el.textContent = el.getAttribute('data-en');
    } else if(lang === 'da') {
      el.textContent = el.getAttribute('data-da');
    }
  });
  
  // Update document language
  if(lang === 'en') {
    document.documentElement.lang = 'en';
  } else {
    document.documentElement.lang = 'da';
  }
}