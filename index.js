const url="https://api.jikan.moe/v4/anime?page=1";
fetch(url)
  .then(response => response.json())
  .then(json => {
    let data=json.data;
    const bottomdiv=document.querySelector("#bottomdiv");
    let pageCount=1;
    let lastvisiblepage=10;
    data.forEach(anime => {
      let image=anime.images.jpg.image_url;
      let type=anime.type;
      let episodes=anime.episodes;
      let score=anime.score;
      let name=anime.title;
      let theStory=anime.synopsis;
      let id=anime.mal_id;
      clonethecards(image,name,id);
    });
    let btndiv=document.createElement("footer");
    btndiv.id="btndiv";
    for( pageCount;pageCount<=lastvisiblepage;pageCount++)
    {
      let counter=pageCount;
      let btn=document.createElement("button");
      btn.addEventListener("click",function(){
        listTheseries(counter);
      });
      btn.innerHTML=pageCount;
      btn.className="btn";
      btndiv.appendChild(btn);
    }
    let topofpage=document.createElement("a");
    topofpage.href="#topdiv";
    topofpage.textContent="Top of Page";
    btndiv.appendChild(topofpage);
    topofpage.id="topofpage";
    bottomdiv.appendChild(btndiv);
    if(!document.querySelector("#bottomofpage"))
    {
      let bottomofpage=document.createElement("a");
      bottomofpage.id="bottomofpage";
      bottomofpage.href="#btndiv";
      bottomofpage.textContent="Bottom of Page";
      document.querySelector("#topdiv").appendChild(bottomofpage);
    }
  });
function listTheseries(i)
{
  const url="https://api.jikan.moe/v4/anime?page="+i;
  fetch(url)
    .then(response => response.json())
    .then(json => {
      let data=json.data;
      const bottomdiv=document.querySelector("#bottomdiv");
      bottomdiv.innerHTML="";
      let pageCount=1;
      let lastvisiblepage=10;
      data.forEach(anime => {
        let image=anime.images.jpg.image_url;
        let type=anime.type;
        let episodes=anime.episodes;
        let score=anime.score;
        let name=anime.title;
        let theStory=anime.synopsis;
        let id=anime.mal_id;
        clonethecards(image,name,id);
      });
      let btndiv=document.createElement("footer");
      btndiv.id="btndiv";
      for(pageCount;pageCount<=lastvisiblepage;pageCount++)
      {
        let counter=pageCount;
        let btn=document.createElement("button");
        btn.addEventListener("click",function(){
          listTheseries(counter);
          //when ı write here pageCount then the varıable have the last pageCount value at the end.
        });
        btn.innerHTML=pageCount;
        btn.className="btn";
        btndiv.appendChild(btn);
      }
      let topofpage=document.createElement("a");
      topofpage.href="#topdiv";
      topofpage.id="topofpage";
      topofpage.textContent="Top of Page";
      btndiv.appendChild(topofpage);
      bottomdiv.appendChild(btndiv);
      if(!document.querySelector("#bottomofpage"))
      {
        let bottomofpage=document.createElement("a");
        bottomofpage.id="bottomofpage";
        bottomofpage.href="#btndiv";
        bottomofpage.textContent="Bottom of Page";
        document.querySelector("#topdiv").appendChild(bottomofpage);
      }
    });
}
function clonethecards(imageURL,animename,id)
{
  const template=document.querySelector("#anime-cards");
  const clone=template.content.cloneNode(true);
  clone.querySelector("img").src=imageURL;
  clone.querySelector(".linktoinfo").href=`moreinfo?id=${id}`;
  clone.querySelector("#name").textContent=animename;
  clone.querySelector("#name").href=`moreinfo?id=${id}`;
  document.querySelector("#bottomdiv").appendChild(clone);
  console.log(id);
}
