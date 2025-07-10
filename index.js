const url="https://api.jikan.moe/v4/anime/52807";

fetch(url)//istek gonderıyoruz.
  .then(response=>response.json())
  .then(json=>{
    const data=json.data;
    const bottomdiv=document.querySelector("#bottomdiv");
    let card=document.createElement("div");
    card.id="card";

    const image=data.images.jpg.image_url;
    card.innerHTML=`
      <h3>${data.title} / ${data.title_japanese}</h3>
      <img src="${image}" height=200>
    `;
    bottomdiv.appendChild(card);

    
    
  })
  
  
