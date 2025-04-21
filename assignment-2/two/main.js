let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".current");
let result = document.querySelector(".classes-list div");

function showClasses() {
result.innerHTML = ""; 

let classes = [...currentElement.classList].sort();

if (classes.length === 0) {
    let p = document.createElement("p");
    p.textContent = "No Classes To Show";
    result.appendChild(p);
} else {
    classes.forEach(cls => {
    let span = document.createElement("span");
    span.textContent = cls;
    result.appendChild(span);
    });
}
}

add.addEventListener("blur", function(){
let value = add.value.trim().toLowerCase();
if(value !== "") {
value.split(" ").forEach(cls => {
    if(cls !== "")
        currentElement.classList.add(cls);
});
add.value ="";
showClasses();
}
});

remove.addEventListener("blur", function(){
let value = remove.value.trim().toLowerCase();
if(value !== ""){
    value.split(" ").forEach(cls => {
        if(cls !== "")
            currentElement.classList.remove(cls);
    });
    remove.value = "";
    showClasses();
}
});

