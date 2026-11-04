// Tutor-owned HTML section loader. Use VS Code Live Server, not file://.
// Students edit their own sections/*.html, styles/*.css, and scripts/*.js.
const sections = ["navbar","hero","features","testimonials","cta","footer"];
async function loadSections() {
  await Promise.all(sections.map(async (name) => {
    const target = document.querySelector(`[data-section="${name}"]`);
    try {
      const res = await fetch(`./sections/${name}.html`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      target.innerHTML = await res.text();
    } catch (error) {
      console.error(`Could not load ${name}`, error);
      target.innerHTML = '<p class="load-error">Start the project with VS Code Live Server to view this section.</p>';
    }
  }));
  document.dispatchEvent(new Event("manage:sections-ready"));
}
loadSections();