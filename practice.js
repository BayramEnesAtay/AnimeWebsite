


  const url="https://api.jikan.moe/v4/anime?page=1";
  fetch(url)
.then(response=>response.json())
.then(json=>{
  
  let data=json.data;
  const bottomdiv=document.querySelector("#bottomdiv");

  data.forEach(anime => {

      let card=document.createElement("div");
      card.id="card";
      let image=anime.images.jpg.image_url;

      card.innerHTML=`
      <h4>${anime.title}</h4>
      <img src="${image}" height=200>


      `


      bottomdiv.appendChild(card);
  });
  for(let i=0;i<10;i++)
  {
    let btn=document.createElement("button");
    btn.addEventListener("click",function(){
      page(i+1);
    });
    btn.innerHTML=i+1;
    btn.id="btn";
    bottomdiv.appendChild(btn);

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
      let image=anime.images.jpg.image_url;

      card.innerHTML=`
      <h4>${anime.title}</h4>
      <img src="${image}" height=200>


      `


      bottomdiv.appendChild(card);
  });
  for(let i=0;i<10;i++)
  {
    let btn=document.createElement("button");
    btn.addEventListener("click",function(){
      page(i+1);
    });
    btn.innerHTML=i+1;
    btn.id="btn";
    bottomdiv.appendChild(btn);

  }
}
)
}//duzenleme kaldı ve tum anımelerı yuklucem sonrasında detaylara gecıcem.
