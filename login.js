var username=document.querySelector(".username");
var email=document.querySelector(".email");
var password=document.querySelector(".password");
var registarbtn=document.querySelector(".login-btn");
var p=document.querySelector(".p");

let user={name:username.value,pass:password.value,emailuser:email.value}
localStorage.setItem('name',user.name);
localStorage.setItem('password',user.pass);
localStorage.setItem('email',user.emailuser);
registarbtn.addEventListener('click',function(e){
    e.preventDefault();
if(username.value===""||password.value===""||email.value===""){
    
p.innerHTML="Oop!  please enter data....."; p.style.color="red";}
    else{
    let user={name:username.value,pass:password.value,emailuser:email.value}
    localStorage.setItem('name',user.name);
    localStorage.setItem('password',user.pass);
    localStorage.setItem('email',user.emailuser);
    
setTimeout(()=>{window.location="registar.html"},1000)
    }
})
console.log(p);