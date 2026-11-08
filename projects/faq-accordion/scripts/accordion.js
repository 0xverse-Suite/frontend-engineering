// Munachimso: improve accordion behavior and make only one answer open at a time.
// Basic behavior below intentionally allows more than one open answer.
document.querySelectorAll(".faq-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    if (!answer) return;
    const opening = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(opening));
    answer.hidden = !opening;
    const img = button.querySelector("img");
    if (img) img.src = opening ? "./resources/minus.svg" : "./resources/plus.svg";
  });
});
