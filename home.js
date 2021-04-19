
    

let producteDom=document.querySelector('.prodect');
let producteDom1=document.querySelector('.prodect1');
let producteDom2=document.querySelector('.prodect2');

let CartProdectDom=document.querySelector('.carts-prodect div');
let accountprodect=document.querySelector('.shopping-icon span');
let badge=document.querySelector('.shopping-icon ');
let CartProdectMenua=document.querySelector('.carts-prodect');
let CartProdectMenuaDom=document.querySelector('.cartprodetmenudom');
//let dispw=document.querySelector('.disprodect');



/*open cart menua*/
badge.addEventListener('click',OpenCartMenu);
    function OpenCartMenu(){
    if(CartProdectDom.innerHTML!=""){ 
        if(CartProdectMenua.style.display=="block"){
        CartProdectMenua.style.display="none";
      }else{CartProdectMenua.style.display="block";} }};

   



/*disply prodect*/

(function draprodect(){
  let prodectut=prodect.map((item)=>{
      
    return `<div class="prodect-item">
   <img class="item-img" src="${item.img}" width="100%" >
        <p>${item.tite}</p>
        <p>${item.salary}$</p> 
          
         <div>
       <img src="${item.deverimg}" width=100%; onclick="disply(${item.id})">
 <button id="addcard" onclick="addtocard(${item.id})">add to card <i class="fas fa-angle-right fa-lg"></i></button> </div>
        
        </div>`
         });
      
producteDom.innerHTML=prodectut;})();

/*check ther prodect in databes*/

let adedItem=localStorage.getItem('prodectInCart')?JSON.parse(localStorage.getItem('prodectInCart')):[];

if(adedItem){
    adedItem.map(item=> { CartProdectDom.innerHTML+=`<p>${item.tite}</p>`;}); 
    accountprodect.style.opacity="1"; accountprodect.innerHTML+=adedItem.length;}

/*add to card*/
function addtocard(id){
   if(localStorage.getItem('name')){
    let choosenid=prodect.find((item)=>item.id===id); 
    adedItem=[...adedItem,choosenid];
    let y=JSON.stringify(addtocard);
    localStorage.setItem('prodectInCart',JSON.stringify(adedItem));
    CartProdectDom.innerHTML+=`<p> ${choosenid.tite}</p>`;
    accountprodect.style.opacity="1";
    let cartprodectitem=document.querySelectorAll('.carts-prodect div p');
    accountprodect.innerHTML=cartprodectitem.length;
   
   }
  
else{window.location="login.html"}
    
}



(function draprodect(){
  let prodectut=prodects.map((item)=>{
      
    return `<div class="prodect-item">
   <img class="item-img" src="${item.img}" width="100% ">
        <p>${item.tite}</p>
        <p>${item.salary}$</p> 
          
          
         
         
         <div>
       <img src="${item.deverimg}" width=100%;  >
 <button id="addcard" >add to card</button></div>
        
        </div>
        ` });
      
producteDom1.innerHTML=prodectut;})();


let dis=document.querySelector(".disp");
let btn=document.querySelector('.btn');

function disply(id){
    
    let div=document.createElement('div');
    
  let prodectut=prodect4.map((item)=>{
      
    return `<div class="prodect-item">
   <img class="item-img" src="${item.img}" width="100% ">
        <p>${item.tite}</p>
        <p>${item.salary}$</p> 
          
          
         
         
         <div>
       <img src="${item.deverimg}" width=100%;  >
 </div>
        
        </div>
        ` });
      
div.innerHTML=prodectut;
    
    let choosenid=prodect.find((item)=>item.id===id); 
    dis.style.display="block";dis.style.zIndex="100"; dis.style.display="flex"; dis.style.background="#ffd3b4";
      console.log(id);
let h=`<section style=" margin: auto; display: flex;  height:40%; background:#f4f5d; margin-buttom:20px; width:80%;">
<div style="width: 40%;height: 100%; position: relative;">

        <img  class="mom1"src="${choosenid.imgchild2}" width=100%; height=100%; >
        <img class="mom2"src="${choosenid.img}" width=100%; height=100%; style="position: absolute; top:0;left: 0;">
 <img class="mom3"src="${choosenid.imgchild1}" width=100%; height=100%; style="position: absolute; top:0;left: 0;">
 <img class="mom4"src="${choosenid.deverimg}" width=100%; height=100%; style="position: absolute; top:0;left: 0;"></div>
    <div class="j"  style="display: flex; flex-direction: column; flex-grow: 1; width: 9%; ">
        <img class="child1" src="${choosenid.deverimg}" width="100%" height=22%;>
        <img class="child2" src="${choosenid.img}" width="100%" height=22%;>
        <img class="child3" src="${choosenid.imgchild1}" width="100%" height=22%;>
        <img class="child4" src="${choosenid.imgchild2}" width="100%" height=22%;>
    </div>
        <section class="sect3" style="background-color: ; flex-grow: 4; width: 50% ; padding-left:5%;">
    <h3>summer dream set</h3>
    <p>64#</p>
    <ul style="list-style:circle; padding-left:10%;">
    <li>Knit two-pieces set</li>
        <li>A-Shaped Shorts
</li>
        <li>Knit top
</li>
    
    </ul>
    <p>‘I love this set and Ayla agrees. She’s comfortable enough in it, and I find this style super cool. Perfect mix.’ – </p>
    <p>color</p>
    <span style="width:10%; height: 34px; background-color: gray; border:10px solid gold; outline-offset: 1px solid black; display: inline-block;"></span>
 <span style="width:10%; height: 34px; background-color: snow; border:10px solid gold; outline-offset: 1px solid black; display: inline-block;"></span> <span style="width:10%; height: 34px; background-color: blueviolet; border:10px solid gold; outline-offset: 1px solid black; display: inline-block;"></span>
<p>size</p>
 <span style="display: inline-block; padding:10px 14px; border: 1px solid black; background:gold;" :>18-24 mo</span> 
     <span style="display: inline-block; padding:10px 14px; border: 1px solid black;">2-3 yo</span>   
 <span style="display: inline-block; padding:10px 14px; border: 1px solid black;">4-6 yo</span>   
 <span style="display: inline-block; padding:10px 14px; border: 1px solid black;">6-8 yo</span>   
 <p>in stock</p>   
    <p><a>size gude</a></p>
    <p>quatity</p>
    
    
    </section>

    </section>

<section class=""  style=" margin: auto; margin-top:5%;  height:600px; background:; width:100%; margin-left:0;">
<h2 style="width:100%; margin-top:20px;">you might also like.....</h2><section class="disprodect">${div.innerHTML}</section></section>
`;
    
    
    dis.innerHTML=h;
  

btn.style.display="block";
    btn.style.zIndex="120";
    
    
    
    
    
    
    

}

    let div=document.querySelector('.disp');
        console.log(btn);
    btn.addEventListener('click',close);
    function close(){if(dis.style.display=="none") {}else{dis.style.display="none"; btn.style.display="none";}  console.log(dis);
}

                             
                             
                            

(function draprodect(){
  let prodectut=prodects.map((item)=>{
      
    return `<div class="prodect-item">
   <img class="item-img" src="${item.img}" width="100% ">
        <p>${item.tite}</p>
        <p>${item.salary}$</p> 
          
          
         
         
         <div>
       <img src="${item.deverimg}" width=100%;  >
 <button id="addcard" >add to card</button></div>
        
        </div>
        ` });
      
producteDom2.innerHTML=prodectut;})();

























