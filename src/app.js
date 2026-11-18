import {defaultDraft,templates} from './catalog.js';
import {drawInvitation} from './draw.js';
import {initEditor} from './editor.js';

function sample(template){return {...defaultDraft(),template,firstName:'Amira',secondName:'Daniel',date:'2027-06-12',time:'17:00',venue:'The Glasshouse Garden'};}
function initGallery(){
  const grid=document.querySelector('#template-grid');
  const render=()=>{
    grid.replaceChildren();
    for(const template of templates){
      const card=document.createElement('a');card.className='template-card';card.href=`/editor.html?template=${encodeURIComponent(template.id)}`;
      const art=document.createElement('div');art.className='template-art';
      const canvas=document.createElement('canvas');drawInvitation(canvas,sample(template.id),{scale:.38});art.append(canvas);
      const title=document.createElement('h3');title.textContent=template.name;
      const note=document.createElement('p');note.textContent=template.note;
      card.append(art,title,note);grid.append(card);
    }
  };
  render();document.fonts.ready.then(render);
}
if(document.body.dataset.page==='gallery')initGallery();
if(document.body.dataset.page==='editor')initEditor();
