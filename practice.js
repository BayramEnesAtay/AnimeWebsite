
const url="https://api.jikan.moe/v4/anime?page=1";
fetch(url)
  .then(response=>response.json())
  .then(json=>{
  
    let data=json.data;
    const bottomdiv=document.querySelector("#bottomdiv");
    let pageCount=1;
    let lastvisiblepage=10;
    data.forEach(anime => {

      let card=document.createElement("article");
      card.id="card";
      let imagediv=document.createElement("figure");
      imagediv.id="imagediv";
      let image=anime.images.jpg.image_url;
      let description=document.createElement("aside");
      description.id="info";
      let type=anime.type;
      let episodes=anime.episodes;
      let score=anime.score;
      let detail=document.createElement("sl-details");
    
      detail.setAttribute("summary","The Story");

      detail.textContent=anime.synopsis;
      //detail kısmı
      let trailer=anime.trailer.url;
      description.innerHTML=`
        <a href=${trailer}>Click to see trailer</a>
        <h5>Type: ${type}</h5>
        <h5>episodes: ${episodes}</h5>
        <h5>Score: ${score}</h5>
        
      `;
      imagediv.innerHTML=`
      <img src="${image}" height=270>
      `;
      card.innerHTML=`
      <h4>${anime.title}</h4>
      
      `;
      description.appendChild(detail);
      imagediv.appendChild(description);
      card.appendChild(imagediv);

      bottomdiv.appendChild(card);
    });
    let btndiv=document.createElement("footer");
    btndiv.id="btndiv";

    for( pageCount;pageCount<=lastvisiblepage;pageCount++)
    {
      let counter=pageCount;
      let btn=document.createElement("button");
      btn.addEventListener("click",function(){
        list_theseries(counter);
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

function list_theseries(i)
{
  const url="https://api.jikan.moe/v4/anime?page="+i;
  fetch(url)
    .then(response=>response.json())
    .then(json=>{
  
      let data=json.data;
      const bottomdiv=document.querySelector("#bottomdiv");
      bottomdiv.innerHTML="";
      let pageCount=1;
      let lastvisiblepage=10;
  
      data.forEach(anime => {

        let card=document.createElement("article");
        card.id="card";
        let imagediv=document.createElement("figure");
        imagediv.id="imagediv";
        let image=anime.images.jpg.image_url;
        let description=document.createElement("aside");
        description.id="info";
        let type=anime.type;
        let episodes=anime.episodes;
        let score=anime.score;

        let trailer=anime.trailer.url;
        description.innerHTML=`
        <a href=${trailer}>Click to see trailer</a>
        <h5>Type: ${type}</h5>
        <h5>episodes: ${episodes}</h5>
        <h5>Score: ${score}</h5>
        
      `;

        imagediv.innerHTML=`
      <img src="${image}" height=270>
      `;
        card.innerHTML=`
      <h4>${anime.title}</h4>
      
     

      `;
        imagediv.appendChild(description);
        card.appendChild(imagediv);

        bottomdiv.appendChild(card);
      });
      let btndiv=document.createElement("footer");
      btndiv.id="btndiv";

      for(pageCount;pageCount<=lastvisiblepage;pageCount++)
      {
        let counter=pageCount;
        let btn=document.createElement("button");
        btn.addEventListener("click",function(){
          list_theseries(counter);//when ı write here pageCount then the varıable have the last pageCount value at the end.
      
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
}//load the rest
//and the descriptions
