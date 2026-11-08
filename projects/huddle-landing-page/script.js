// Huddle class project — shared loader, plain JavaScript. Use VS Code Live Server.
// Team members edit only their assigned section HTML and matching styles.
const sections = ["header","hero","grow","conversations","users","cta","footer"];
async function mountSections() {
  for (const section of sections) {
    const target = document.querySelector('[data-section="' + section + '"]');
    try {
      const response = await fetch("./sections/" + section + ".html");
      if (!response.ok) throw new Error("HTTP " + response.status);
      target.innerHTML = await response.text();
    } catch (error) {
      target.textContent = "Cannot load " + section + ". Start a local HTTP server.";
      console.error(error);
    }
  }
  document.dispatchEvent(new Event("huddle:ready"));
}
mountSections();