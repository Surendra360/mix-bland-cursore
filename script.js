const body=document.querySelector("body");
const point=document.querySelector(".point");

body.addEventListener("mousemove", function (e){
    point.style.left= e.x + "px";
    point.style.top=e.y + "px";

});