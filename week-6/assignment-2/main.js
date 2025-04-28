let name = document.querySelector("[type = text]");
let pass = document.querySelector("[type = password]");
let email = document.querySelector("[type = email]");
let country = document.getElementById("country");

name.addEventListener("input",function(){
window.sessionStorage.setItem("input-1",name.value);
});

pass.addEventListener("input",function(){
    window.sessionStorage.setItem("input-2",pass.value);
    });

    email.addEventListener("input",function(){
        window.sessionStorage.setItem("input-3",email.value);
        });

country.addEventListener("change",function(){
window.sessionStorage.setItem("option",country.value);
});

window.onload = function(){
if(window.sessionStorage.getItem("input-1")){
    name.value = window.sessionStorage.getItem("input-1");
}
if(window.sessionStorage.getItem("input-2")){
    pass.value = window.sessionStorage.getItem("input-2");
}
if(window.sessionStorage.getItem("input-3")){
    email.value = window.sessionStorage.getItem("input-3");
}
if(window.sessionStorage.getItem("option")){
    country.value = window.sessionStorage.getItem("option");
}
};