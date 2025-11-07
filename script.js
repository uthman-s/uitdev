// Simpelt script: sætter årstal i footer og tilføjede grundlæggende tilgængelighed
document.addEventListener('DOMContentLoaded', function(){
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;
});