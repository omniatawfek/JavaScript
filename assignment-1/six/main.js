let numbers = document.querySelector("[type = number]");
let text = document.querySelector("[type = text]");

let btn = document.querySelector("[type = submit]");

let type = document.querySelector("[name = type]");

let result = document.querySelector(".results");

document.forms[0].onsubmit = function(e) {
    e.preventDefault();
}
btn.onclick = function(){
    result.innerHTML='';
    for(let i = 0; i < numbers.value ; i++){
        if(type.value == "Div"){
            let div = document.createElement("div");
            div.setAttribute("class","box");
            div.setAttribute("title","Element");
            div.setAttribute("id",`id-${i+1}`);
            let words = document.createTextNode(text.value);
            div.appendChild(words);
            result.appendChild(div);
        }
        else  {
            let section = document.createElement("section");
            section.setAttribute("class","box");
            section.setAttribute("title","Element");
            section.setAttribute("id",`id-${i+1}`);
            let words = document.createTextNode(text.value);
            section.appendChild(words);
            result.appendChild(section);
        }
    }
}