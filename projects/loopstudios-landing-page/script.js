// Tutor-owned section loader. Use VS Code Live Server.
const sectionNames=["header","hero","about","gallery-intro","gallery","footer"];
async function loadSections(){
  for(const name of sectionNames){
    const node=document.querySelector('[data-section="'+name+'"]');
    try{
      const response=await fetch("./sections/"+name+".html");
      if(!response.ok)throw new Error(response.status);
      node.innerHTML=await response.text();
    }catch(error){node.textContent="Unable to load "+name+". Start Live Server.";console.error(error)}
  }
  document.dispatchEvent(new Event("loopstudios:ready"));
}
loadSections();