let finalinfo;
(function(){
   let info =  window.localStorage.getItem("information");

   finalinfo = JSON.parse(info);

   let ui = document.getElementById('logo');

  ui.innerHTML =  finalinfo.map(items=>`
    <img style="width:70px;height:70px;border-radius:50%" src="${items.img}">
   `)
})()

let count = 0;
function showdata(){
         if(count%2==0){         
         document.querySelector('#showinfo').innerHTML = finalinfo.map(items=>`
              <div>
               <div>${items.username}</div>
               <div>${items.mobile}</div>
               <div onclick="logout()">logout</div>
              </div>
         `
        )

        count++
         }
         else if(count%2!=0){
          document.querySelector('#showinfo').innerHTML ="";
          count++
         }
}

function logout(){
  let out = window.confirm("do you want to logout");
  if(out){
    window.localStorage.clear("information")
  window.open("login.html")   
  }else{

  }
}