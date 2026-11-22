(()=>{"use strict";
function initPortalNavigation(){
 const header=document.querySelector(".bar");
 const menu=document.getElementById("menu-toggle");
 const nav=document.getElementById("site-nav");
 if(!header||!menu||!nav)return;
 const isMobile=()=>window.matchMedia("(max-width: 760px)").matches;
 const setOpen=(open)=>{
  const active=Boolean(open&&isMobile());
  nav.classList.toggle("open",active);
  document.body.classList.toggle("menu-open",active);
  menu.setAttribute("aria-expanded",String(active));
  menu.setAttribute("aria-label",active?"メニューを閉じる":"メニューを開く");
  menu.setAttribute("aria-controls","site-nav");
 };
 menu.type="button";
 menu.addEventListener("click",event=>{
  event.preventDefault();
  event.stopPropagation();
  setOpen(!nav.classList.contains("open"));
 });
 nav.addEventListener("click",event=>{
  if(event.target.closest("a"))setOpen(false);
 });
 document.addEventListener("click",event=>{
  if(nav.classList.contains("open")&&!header.contains(event.target))setOpen(false);
 });
 document.addEventListener("keydown",event=>{
  if(event.key==="Escape")setOpen(false);
 });
 window.addEventListener("resize",()=>{if(!isMobile())setOpen(false);});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initPortalNavigation,{once:true});
else initPortalNavigation();
})();