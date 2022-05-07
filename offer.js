import {navbar} from "./navbar.js";

let  n =document.getElementById("navbar");
n.innerHTML=navbar();


let outerfun=document.getElementById("outer").children
for(let ele of outerfun)
{
    ele.addEventListener("click",outerfunction)
}
function outerfunction()
{
    console.log(":jdskbf")
}