// Student exercise: understand event listeners, DOM traversal and accessibility.
// Starter behavior: toggle answers. Improve it to allow only one item open at a time.
const buttons = document.querySelectorAll(".faq-trigger");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.getAttribute("aria-controls"));
    const opening = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(opening));
    target.hidden = !opening;
    const icon = button.querySelector("img");
    icon.src = opening ? "./resources/minus.svg" : "./resources/plus.svg";
  });
});
// TODO: implement single-open mode, keyboard testing and automated behavior tests.