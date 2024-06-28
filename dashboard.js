(function(){
   let info =  window.localStorage.getItem("information");

   let finalinfo = JSON.parse(info);

   let ui = document.getElementById('logo');

  ui.innerHTML =  finalinfo.map(items=>`
    <img style="width:70px;height:70px;border-radius:50%" src="${items.img}">
    <div>${items.username}</div>`)
})()