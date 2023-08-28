let btn=document.getElementById('btn');
let txt=document.getElementById('txt');

function changecolor(color){
  document.body.style.background=color;  
  btn.style.background=color;
  txt.style.borderColor=color;


  document.querySelectorAll('span').forEach(function(item){
    item.classList.remove('active');
  })
  event.target.classList.add('active');
}


const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const username=form.user.value;
    const password=form.pass.value;

    const authenticated =authentication(username,password);

    if(authenticated){
        window.location.href = "logout.html";
    }
    else{
        alert("wrong");
    }
})

function authentication(username,password){
    if(username === "admin" && password === "password"){
        return true;
    }
    else{
        return false;
    }
}

const logoutbtn=document.querySelector(".logout-btn");

logoutbtn.addEventListener("click",()=>{
    window.location.replace("login.html");
})