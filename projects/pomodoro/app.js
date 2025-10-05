let focusMin=25,breakMin=5;let isFocus=true;let total=focusMin*60,left=total;let running=false,auto=true,timer=null;
const $=s=>document.querySelector(s);const modeEl=$('#mode'),timeEl=$('#time'),barEl=$('#bar');
const startBtn=$('#start'),pauseBtn=$('#pause'),resetBtn=$('#reset');const focusInput=$('#focus'),breakInput=$('#break'),autoInput=$('#auto');
function fmt(n){const m=Math.floor(n/60).toString().padStart(2,'0');const s=Math.floor(n%60).toString().padStart(2,'0');return m+':'+s;}
function update(){timeEl.textContent=fmt(left);const prog=(1-left/total)*100;barEl.style.width=prog+'%';modeEl.textContent=isFocus?'FOCUS':'BREAK';}
function tick(){if(!running)return;left-=1;if(left<=0){isFocus=!isFocus;total=(isFocus?focusMin:breakMin)*60;left=total;if(!auto){running=false;clearInterval(timer);}}update();}
function start(){if(running)return;running=true;clearInterval(timer);timer=setInterval(tick,1000);}function pause(){running=false;clearInterval(timer);}
function reset(){running=false;clearInterval(timer);isFocus=true;focusMin=parseInt(focusInput.value)||25;breakMin=parseInt(breakInput.value)||5;auto=!!autoInput.checked;total=focusMin*60;left=total;update();}
startBtn.addEventListener('click', start);pauseBtn.addEventListener('click', pause);resetBtn.addEventListener('click', reset);
focusInput.addEventListener('change', reset);breakInput.addEventListener('change', reset);autoInput.addEventListener('change', ()=>{auto=!!autoInput.checked;});reset();