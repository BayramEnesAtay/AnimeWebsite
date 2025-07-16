


  const url="https://api.jikan.moe/v4/anime?page=1";
  fetch(url)
.then(response=>response.json())
.then(json=>{
  
  let data=json.data;
  const bottomdiv=document.querySelector("#bottomdiv");

  data.forEach(anime => {

      let card=document.createElement("div");
      card.id="card";
      let imagediv=document.createElement("div");
      imagediv.id="imagediv";
      let image=anime.images.jpg.image_url;
      let description=document.createElement("div");
      description.id="info"
      let type=anime.type;
      let episodes=anime.episodes;
      let score=anime.score;

      let trailer=anime.trailer.url;
      description.innerHTML=`
        <a href=${trailer}>Click to see trailer</a>
        <h5>Type: ${type}</h5>
        <h5>episodes: ${episodes}</h5>
        <h5>Score: ${score}</h5>
        
      `

      imagediv.innerHTML=`
      <img src="${image}" height=270>
      `
      card.innerHTML=`
      <h4>${anime.title}</h4>
      
     

      `
      imagediv.appendChild(description);
      card.appendChild(imagediv);

      bottomdiv.appendChild(card);
  });

  let btndiv=document.createElement("div");
    btndiv.id="btndiv";
  for(let i=0;i<10;i++)
  {
    let btn=document.createElement("button");
    btn.addEventListener("click",function(){
      page(i+1);
    });
    btn.innerHTML=i+1;
    btn.id="btn";
    
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
    

})


function page(i)
{
 
  const url="https://api.jikan.moe/v4/anime?page="+i;
  fetch(url)
.then(response=>response.json())
.then(json=>{
  
  let data=json.data;
  const bottomdiv=document.querySelector("#bottomdiv");
  bottomdiv.innerHTML="";

  data.forEach(anime => {

      let card=document.createElement("div");
      card.id="card";
      let imagediv=document.createElement("div");
      imagediv.id="imagediv";
      let image=anime.images.jpg.image_url;
      let description=document.createElement("div");
      description.id="info"
      let type=anime.type;
      let episodes=anime.episodes;
      let score=anime.score;

      let trailer=anime.trailer.url;
      description.innerHTML=`
        <a href=${trailer}>Click to see trailer</a>
        <h5>Type: ${type}</h5>
        <h5>episodes: ${episodes}</h5>
        <h5>Score: ${score}</h5>
        
      `

      imagediv.innerHTML=`
      <img src="${image}" height=270>
      `
      card.innerHTML=`
      <h4>${anime.title}</h4>
      
     

      `
      imagediv.appendChild(description);
      card.appendChild(imagediv);

      bottomdiv.appendChild(card);
  });

  let btndiv=document.createElement("div");
    btndiv.id="btndiv";

  for(let i=0;i<10;i++)
  {
    let btn=document.createElement("button");
    btn.addEventListener("click",function(){
      page(i+1);
      
    });
    btn.innerHTML=i+1;
    btn.id="btn";
    
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
   
    

    
})
}//load the rest
//and the descriptions


