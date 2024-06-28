function sub(){
    let id = document.querySelector('#id').value;
    let nam = document.querySelector('#name').value;
    let img = document.querySelector('#img').value;
    let username = document.querySelector('#uname').value;
    let mobile = document.querySelector('#mob').value;
    let password = document.querySelector('#pass').value;
    let confirm_password = document.querySelector('#cpass').value;

    console.log(nam,username);

    let information = {
        "id":id,
        "name":nam,
        "img":img,
        "username":username,
        "mobile":mobile,
        "password":password,
        "confirm_password":confirm_password
    }

    let url = 'http://localhost:4000/registration';
    let obj = {
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(information)
    }
    fetch(url,obj)
}



