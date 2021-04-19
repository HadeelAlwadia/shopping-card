var username=document.querySelector(".username");
var password=document.querySelector(".password");
var registarbtn=document.querySelector(".regisarbtn");
var getuser=localStorage.getItem('name');
let getpass=localStorage.getItem('password');
var p=document.querySelector(".p");
p.style.color="red"; 
console.log(registarbtn);    
registarbtn.addEventListener('click',function (e){
    e.preventDefault();
    if(username.value===""||password.value===""){ p.innerHTML="full data:try agein...";}
    else {if(getuser===username.value&&getuser.trim()&&getpass===password.value&&getpass){
        setTimeout(()=>{window.location="basic bage.html"},1000)
          }else{  p.innerHTML="user or pass invid:try agein..";}}
    })

