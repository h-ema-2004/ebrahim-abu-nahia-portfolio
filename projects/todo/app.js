const listEl=document.getElementById('list');const form=document.getElementById('todo-form');const input=document.getElementById('new-task');const filterBtns=document.querySelectorAll('.filters button');
let tasks=JSON.parse(localStorage.getItem('tasks')||'[]');let filter='all';
function save(){localStorage.setItem('tasks',JSON.stringify(tasks));}
function uid(){return Math.random().toString(36).slice(2,9);}
function render(){listEl.innerHTML='';const filtered=tasks.filter(t=>filter==='all'?true:filter==='done'?t.done:!t.done);for(const t of filtered){const li=document.createElement('li');li.className='item'+(t.done?' done':'');li.innerHTML=`
<input type="checkbox" ${t.done?'checked':''} data-id="${t.id}" class="toggle">
<div class="title" contenteditable="true" data-id="${t.id}">${t.title}</div>
<div class="actions"><button class="del" data-id="${t.id}">Delete</button></div>`;listEl.appendChild(li);}}
form.addEventListener('submit',e=>{e.preventDefault();const title=input.value.trim();if(!title)return;tasks.push({id:uid(),title,done:false});input.value='';save();render();});
listEl.addEventListener('click',e=>{if(e.target.classList.contains('del')){tasks=tasks.filter(t=>t.id!==e.target.dataset.id);save();render();}if(e.target.classList.contains('toggle')){const t=tasks.find(t=>t.id===e.target.dataset.id);t.done=e.target.checked;save();render();}});
listEl.addEventListener('input',e=>{if(e.target.classList.contains('title')){const t=tasks.find(t=>t.id===e.target.dataset.id);t.title=e.target.textContent.trim();save();}});
filterBtns.forEach(b=>b.addEventListener('click',()=>{filterBtns.forEach(x=>x.classList.remove('active'));b.classList.add('active');filter=b.dataset.filter;render();}));
render();