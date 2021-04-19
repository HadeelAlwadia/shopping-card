var userinfo=document.querySelector(".userlinks");
var link=document.querySelector(".userlinks li .user");
var logout=document.querySelector(".userlinks li .logout");
var cheekregister=localStorage.getItem("name");
var haderconten=document.querySelector(".hader-content");
var links=document.querySelector(".link");

/*var spancon=document.querySelectorAll(".content-add span");
var coadd=document.querySelectorAll(".co");
var itemadd=document.querySelector(".content-add");
var section=document.querySelector('.prodect');*/



function cheek(){
if(cheekregister){
    haderconten.remove();
    userinfo.style.display="block";
    userinfo.style.display="flex";

    link.innerHTML=cheekregister;}}

cheek();
logout.onclick=function(){localStorage.clear();}