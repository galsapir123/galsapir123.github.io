/* Portfolio data stays separate from the rendering and interaction logic. */
const photographs = [
  {file:'living',title:'אור, עץ ומרחב פתוח',type:'interior',label:'INTERIORS / 01',alt:'סלון מואר עם ספה בהירה ורצפת עץ, צילום נדל״ן עם סימן המים המקורי'},
  {file:'pool',title:'כשהערב משנה את האווירה',type:'exterior',label:'EXTERIORS / 02',alt:'בריכת שחייה מוארת לצד בית בשעות הערב'},
  {file:'kitchen',title:'הפרטים שעושים בית',type:'interior',label:'INTERIORS / 03',alt:'מטבח לבן עם שולחן עץ וכיסאות בגוון חמרה'},
  {file:'balcony',title:'מקום לנשום',type:'exterior',label:'EXTERIORS / 04',alt:'מרפסת עם פינת ישיבה פתוחה לנוף'},
  {file:'bathroom',title:'שקט בקווים נקיים',type:'interior',label:'INTERIORS / 05',alt:'חדר רחצה בהיר עם מקלחון זכוכית וסימן מים מקורי'},
  {file:'interior',title:'לראות את החיבור בין החללים',type:'interior',label:'INTERIORS / 06',alt:'חלל מגורים רחב עם מטבח, סלון ופרטי צמחייה'}
];
const gear = {
  camera:{name:'Canon EOS R8',category:'FULL FRAME / CAMERA',copy:'מצלמת Full Frame ללכידת האור, הצבע והפרטים של החלל.',image:'camera'},
  lens:{name:'Canon RF 15–30mm',category:'WIDE ANGLE / LENS',copy:'עדשה רחבה שמאפשרת להראות את הקשר בין החללים ולבחור את הזווית המתאימה לכל חדר.',image:'lens'},
  motion:{name:'DJI RS5',category:'MOVEMENT / GIMBAL',copy:'גימבל לצילום תנועה חלקה ומעבר בין החללים, ליצירת סיור מצולם בתוך הנכס.',icon:'RS5'},
  drone:{name:'מבט מהאוויר',category:'A NEW PERSPECTIVE / DRONE',copy:'רחפן שמוסיף נקודת מבט על הנכס והסביבה. הצילום מותאם למיקום ולתנאי הטיסה.',icon:'↗'},
  audio:{name:'DJI Mic Mini',category:'VOICE / AUDIO',copy:'מערכת מיקרופון אלחוטית להקלטת דיבור כשמשלבים הצגת נכס או קריינות בצילום.',image:'mic'},
  tripod:{name:'חצובה',category:'STABILITY / SUPPORT',copy:'בסיס יציב לתכנון הקומפוזיציה, לשמירה על קווים ולצילום מוקפד של החלל.',image:'tripod'}
};

/* Accessible, filterable gallery and keyboard-operated native dialog. */
const gallery=document.querySelector('#gallery');
const lightbox=document.querySelector('#lightbox');
let visiblePhotos=photographs;
let photoIndex=0;
function renderGallery(filter='all'){
  visiblePhotos=photographs.filter(p=>filter==='all'||p.type===filter);
  gallery.replaceChildren(...visiblePhotos.map((p,index)=>{
    const figure=document.createElement('figure');
    const button=document.createElement('button');
    button.type='button';button.className='photo-button';button.setAttribute('aria-label',`הגדלת תמונה: ${p.title}`);
    const img=document.createElement('img');img.src=`assets/${p.file}.webp`;img.alt=p.alt;img.loading='lazy';img.width=1672;img.height=941;
    const expand=document.createElement('span');expand.className='photo-expand';expand.textContent='↗';expand.setAttribute('aria-hidden','true');
    button.append(img,expand);button.addEventListener('click',()=>{showPhoto(index);lightbox.showModal();});
    const caption=document.createElement('figcaption');
    const title=document.createElement('span');title.textContent=p.title;
    const label=document.createElement('span');label.textContent=p.label;label.dir='ltr';
    caption.append(title,label);figure.append(button,caption);return figure;
  }));
}
function showPhoto(index){
  photoIndex=(index+visiblePhotos.length)%visiblePhotos.length;
  const p=visiblePhotos[photoIndex];
  const img=document.querySelector('#lightbox-image');img.src=`assets/${p.file}.webp`;img.alt=p.alt;
  document.querySelector('#lightbox-caption').textContent=`${p.title} · ${photoIndex+1} / ${visiblePhotos.length}`;
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  renderGallery(button.dataset.filter);
}));
document.querySelector('.lightbox-prev').addEventListener('click',()=>showPhoto(photoIndex-1));
document.querySelector('.lightbox-next').addEventListener('click',()=>showPhoto(photoIndex+1));
lightbox.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(photoIndex+1);}if(event.key==='ArrowRight'){event.preventDefault();showPhoto(photoIndex-1);}});
document.querySelectorAll('dialog').forEach(dialog=>{
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
});

/* Equipment details use supplied catalogue assets; updated gear uses typography. */
document.querySelectorAll('[data-gear]').forEach(button=>button.addEventListener('click',()=>{
  const item=gear[button.dataset.gear];
  document.querySelectorAll('[data-gear]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  document.querySelector('#gear-name').textContent=item.name;
  document.querySelector('#gear-name').dir=['drone','tripod'].includes(button.dataset.gear)?'rtl':'ltr';
  document.querySelector('#gear-category').textContent=item.category;
  document.querySelector('#gear-copy').textContent=item.copy;
  const img=document.querySelector('#gear-image');const icon=document.querySelector('#gear-icon');
  img.hidden=!item.image;icon.hidden=!!item.image;
  if(item.image){img.src=`assets/${item.image}.webp`;img.alt=item.name+' — מתוך הקטלוג';}else{icon.textContent=item.icon;}
}));

/* Verified contact settings live in config.js. Never invent a business number. */
const config=window.SITE_CONFIG||{};
const isNumber=value=>/^\d{9,15}$/.test(value||'');
const contactDialog=document.querySelector('#contact-dialog');
document.querySelector('.close-contact').addEventListener('click',()=>contactDialog.close());
document.querySelectorAll('[data-contact]').forEach(link=>{
  const type=link.dataset.contact;
  const number=type==='phone'?config.phone:(config.whatsapp||config.phone);
  if(isNumber(number)){
    link.href=type==='phone'?`tel:+${number}`:`https://wa.me/${number}?text=${encodeURIComponent(config.whatsappMessage||'')}`;
    if(type==='whatsapp'){link.target='_blank';link.rel='noopener';}
  }else{
    link.addEventListener('click',event=>{event.preventDefault();contactDialog.showModal();});
  }
});
if(!isNumber(config.phone))document.querySelector('#contact-status').textContent='פרטי ההתקשרות יעודכנו בקרוב.';
document.querySelector('#year').textContent=String(new Date().getFullYear());
renderGallery();
