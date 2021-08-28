const menubtn = document.querySelector("#menubtn");
const menu = document.querySelector("#menu");
const line1 = document.querySelector("#line-1");
const line2 = document.querySelector("#line-2");
const line3 = document.querySelector("#line-3");
const togbtn = document.querySelector("#togbtn");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");
const togbtn2 = document.querySelector("#togbtn2");
const moon2 = document.querySelector("#moon");
const sun2 = document.querySelector("#sun");

//menu
menubtn.addEventListener("click",function(){
    menu.classList.toggle("-top-full");
    menu.classList.toggle("top-12");

    line1.classList.add("transition");
    line1.classList.add("ease-in-out");
    line1.classList.add("duration-300");
    line1.classList.toggle("transform");
    line1.classList.toggle("rotate-45");
    line1.classList.toggle("top-1.5");

    line2.classList.toggle("opacity-0");
    line2.classList.add("transition");
    line2.classList.add("ease-in-out");
    line2.classList.add("duration-300");
    line2.classList.add("delay-100");

    line3.classList.add("transition");
    line3.classList.add("ease-in-out");
    line3.classList.add("duration-300");
    line3.classList.toggle("transform");
    line3.classList.toggle("-rotate-45");
    line3.classList.toggle("bottom-1.5");
});

//toggleButtonDesktop
togbtn.addEventListener("click",function(){
    togbtn.classList.toggle("flex-row-reverse");
    moon.classList.toggle("text-yellow-400");
    sun.classList.toggle("text-yellow-400")
});
//toggleButtonDesktop
togbtn2.addEventListener("click",function(){
    togbtn2.classList.toggle("flex-row-reverse");
    sun2.classList.toggle("text-yellow-400");
    moon2.classList.toggle("text-yellow-400");
})