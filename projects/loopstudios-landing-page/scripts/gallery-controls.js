// Xamie: gallery filtering. Extend with better focus and keyboard feedback.
document.addEventListener("loopstudios:ready",()=>{
 const buttons=Array.from(document.querySelectorAll(".filter-button"));
 const cards=Array.from(document.querySelectorAll(".gallery-card"));
 buttons.forEach(button=>button.addEventListener("click",()=>{
   const filter=button.dataset.filter;
   buttons.forEach(item=>{
     const selected=item===button;
     item.classList.toggle("active",selected);
     item.setAttribute("aria-pressed",String(selected));
   });
   cards.forEach(card=>{card.hidden=filter!=="all" && card.dataset.category!==filter});
 }));
});
