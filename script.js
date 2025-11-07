// Language Switching Functionality
document.addEventListener('DOMContentLoaded', function(){
  // Set current year
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // Language switching
  var currentLang = localStorage.getItem('lang') || 'en';
  var langToggle = document.getElementById('langToggle');
  
  // Set initial language based on browser or localStorage
  if(!localStorage.getItem('lang')) {
    var browserLang = navigator.language.split('-')[0];
    if(browserLang === 'da') {
      currentLang = 'da';
    }
  }
  
  // Apply initial language
  setLanguage(currentLang);
  
  // Language toggle button click handler
  if(langToggle) {
    langToggle.addEventListener('click', function(){
      currentLang = currentLang === 'en' ? 'da' : 'en';
      localStorage.setItem('lang', currentLang);
      setLanguage(currentLang);
    });
  }
});

function setLanguage(lang) {
  var elements = document.querySelectorAll('[data-en][data-da]');
  var langToggle = document.getElementById('langToggle');
  
  elements.forEach(function(el) {
    if(lang === 'en') {
      el.textContent = el.getAttribute('data-en');
    } else if(lang === 'da') {
      el.textContent = el.getAttribute('data-da');
    }
  });
  
  // Update toggle button text
  if(langToggle) {
    if(lang === 'en') {
      langToggle.textContent = 'Dansk';
      document.documentElement.lang = 'en';
    } else {
      langToggle.textContent = 'English';
      document.documentElement.lang = 'da';
    }
  }
}