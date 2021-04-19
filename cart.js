let producteDom=document.querySelector('.prodect');
let noprodect=document.querySelector('.noprodect');

let footer=document.querySelector('.footer');

 function draprodect(allprodects=[]){
     if(JSON.parse(localStorage.getItem('prodectInCart')).length===0){ noprodect.innerHTML=`<ul class="noprodectp"><li class="first">there no have prodect</li><li class="secand">        <i class=" shopconopro fas fa-shopping-cart"></i>
<a href="basic bage.html">return to shop</a></li></ul>`; producteDom.style.display="none";  noprodect.style.display="block"; console.log(noprodect);}

     
   let ProdectInCart=JSON.parse(localStorage.getItem('prodectInCart'))||allprodects;

  
     
  let prodectut=ProdectInCart.map((item)=>{
      
    return `<div class="prodect-item">
   <img class="item-img" src="${item.img}" width="100%">
        <p>${item.tite}</p>
        <p>${item.salary}$</p> 
          
          
         
         
         <div>
       <img src="${item.deverimg}" width=100%; >
          <button class="addcard" id="addcard"  onclick="remov(${item.id})">rempve form cart</button>
        </div>
        
        </div>` });
      
producteDom.innerHTML=prodectut;}
draprodect();
    




function remov(id){
    let ProdectInCart=localStorage.getItem('prodectInCart');
    if(ProdectInCart){
        let item=JSON.parse(ProdectInCart);
        let filtereditems=item.filter((item)=>item.id!==id)
    localStorage.setItem('prodectInCart',JSON.stringify(filtereditems));
    draprodect(filtereditems);
    }
}