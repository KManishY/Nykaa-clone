
// navbar js file
import {navbar} from "./navbar.js";

let  n =document.getElementById("navbar");
n.innerHTML=navbar();
// navbar js file




let box1=document.getElementById("main-carousel").children






for(var ele of box1)
{
 ele.addEventListener("click",myfuntion)
}
function myfuntion(){
    window.location.href="./product.html"
}


let div=document.getElementById("product").children
for(var el of div)
{
    el.addEventListener("click",myfun)
}

function myfun(el)
{
    window.location.href="./product.html"
}





