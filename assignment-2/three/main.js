let p = document.getElementsByTagName("p");
p[0].remove();
let div = document.getElementsByTagName("div");

let bef = document.createElement("div");
let start = document.createTextNode("Start");
bef.appendChild(start);
bef.setAttribute("class","start");
bef.setAttribute("title","Start Element");
bef.setAttribute("data-value","Start");

div[0].before(bef);

let aft = document.createElement("div");
let end = document.createTextNode("End");
aft.appendChild(end);
aft.setAttribute("class","end");
aft.setAttribute("title","End Element");
aft.setAttribute("data-value","End");
div[0].after(aft);