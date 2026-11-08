// Esther: improve this navigation toggle, add Escape handling, and test on mobile.
document.addEventListener("huddle:ready", () => {
  const toggle=document.querySelector(".menu-toggle");
  const nav=document.getElementById("huddle-nav");
  if(!toggle||!nav)return;
  toggle.addEventListener("click",()=>{
    const open=toggle.getAttribute("aria-expanded")!=="true";
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Close menu":"Open menu");
    nav.classList.toggle("is-open",open);
  });
});