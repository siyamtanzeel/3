const line1 = document.querySelector("#line-1");
const line2 = document.querySelector("#line-2");
const line3 = document.querySelector("#line-3");
const menu = document.querySelector("#menu");
const menubtn = document.querySelector(".burger");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const ul = document.querySelector("#ul");
menubtn.addEventListener('click',menutoggle);
function menutoggle(){
    

    
    menu.classList.toggle("-inset-x-56")
    menu.classList.toggle("menu-show-animation")

    line1.classList.add("transition");
    line1.classList.add("ease-in-out");
    line1.classList.add("duration-300");
    line1.classList.toggle("transform");
    line1.classList.toggle("rotate-45");
    line1.classList.toggle("top-1");

    line2.classList.toggle("hidden");
    line2.classList.add("transition");
    line2.classList.add("ease-in-out");
    line2.classList.add("duration-300");
    line2.classList.add("delay-100");

    line3.classList.add("transition");
    line3.classList.add("ease-in-out");
    line3.classList.add("duration-400");
    line3.classList.toggle("transform");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("bottom-1");

}
