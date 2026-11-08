// Navigation task — starter vanilla JavaScript. Improve for ESC and outside-click.
document.addEventListener("loopstudios:ready", () => {
  const toggle=document.querySelector(".nav-toggle");
  const nav=document.querySelector("#main-nav");
  if(!toggle||!nav)return;
  toggle.addEventListener("click",()=>{
    const open=toggle.getAttribute("aria-expanded")!=="true";
    toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
    nav.classList.toggle("is-open",open);
  });
});