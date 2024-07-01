(async function(){
    let data = await fetch('http://localhost:4000/registration');
    let response = await data.json();

    document.querySelector('#show').innerHTML = response.map(items=>`
           <tr>
            <td>${items.id}</td>
            <td><img width="80px" height="50px" src="${items.img}" alt="internet issue"></td>
            <td>${items.name}</td>
            <td>${items.username}</td>
            <td>${items.mobile}</td>
            <td onclick="del(${items.id})"> <i class="fa fa-trash" aria-hidden="true"></i> </td>
            <td><i class="fas fa-edit"></i></td>
          
           </tr>
        `).join(" ");
})();

function del(arg){

  alert(arg)
  
  let url = `http://localhost:4000/registration/${arg}`;
  let obj = {
    method:"DELETE"
  }

  fetch(url,obj);
    
}