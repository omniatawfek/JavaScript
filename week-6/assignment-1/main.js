let name = document.getElementById("fonts-name");
let color = document.getElementById("color");
let size = document.getElementById("fonts-size");

let p = document.getElementsByTagName("p")[0];


color.addEventListener("change", function(){
p.style.color = color.value;
window.localStorage.setItem("color",color.value);
});

name.addEventListener("change", function(){
    p.style.fontFamily = name.value;
    window.localStorage.setItem("fontFamily",name.value);
    });

size.addEventListener("change", function(){
p.style.fontSize = size.value + "px";
window.localStorage.setItem("fontSize",size.value);
});

window.onload = function(){
if(localStorage.getItem("color"))
{
p.style.color = localStorage.getItem("color");
color.value = localStorage.getItem("color"); 
}
if(localStorage.getItem("fontFamily"))
    {
    p.style.fontFamily = localStorage.getItem("fontFamily");
    name.value = localStorage.getItem("fontFamily"); 
    }
    if(localStorage.getItem("fontSize"))
        {
        p.style.fontSize = localStorage.getItem("fontSize") + "px";
        size.value = localStorage.getItem("fontSize"); 
        }
};