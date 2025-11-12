// Theme toggle + utilities + email copy + year auto
(function(){ 
  const toggle = document.getElementById('theme-toggle');
  const lsKey = 'theme';
  function applyTheme(t){ document.documentElement.classList.toggle('light', t==='light'); }
  const saved = localStorage.getItem(lsKey);
  if(saved) applyTheme(saved);
  if(toggle) toggle.addEventListener('click', ()=>{
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem(lsKey, isLight ? 'light' : 'dark');
  });
})();

function copyEmail(){
  const e = "youremail@example.com";
  navigator.clipboard.writeText(e).then(()=>{
    const btn = document.getElementById("copy-email");
    if(btn) {
      const old = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(()=> btn.textContent = old, 1200);
    }
  });
}

document.addEventListener('DOMContentLoaded', function(){ 
  var y = document.getElementById('y'); 
  if(y) y.textContent = new Date().getFullYear(); 
});
