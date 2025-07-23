const parametres=new URLSearchParams(window.location.search);// helps us work with the url parametres.(with functions)
const id=parametres.get("id");
const url="https://api.jikan.moe/v4/anime/"+id;
fetch(url)
  .then(Response=>Response.json())
  .then(json=>{
    let data=json.data;
    let title=data.title;
    let alttitle=data.title_japanese;
    clonethedesign(title,alttitle);
  });
function clonethedesign(title,alttitle)
{
  const template=document.querySelector("#details_design");
  const clone=template.content.cloneNode(true);
  clone.querySelector("#title").textContent=title;
  clone.querySelector("#alttitle").textContent=alttitle;
  document.querySelector("#header").appendChild(clone);
}
console.log(id);
