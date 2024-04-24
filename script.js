let spanAngel = document.querySelector(".angle");
window.addEventListener("scroll",function(){
    let value = -10 + window.scrollY/60;
    spanAngel.style.transform = `skewY(${value}deg)`;
})