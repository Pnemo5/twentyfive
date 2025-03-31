document.querySelector(".fade-layer").addEventListener("click",showMenu);
let layer = document.querySelector(".fade-layer");
document.querySelector(".menu-button").addEventListener("click",showMenu);
// let menu = document.querySelector(".menu-button");
function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}