
const btn = document.getElementById('toTop');
if(btn){
  btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}
