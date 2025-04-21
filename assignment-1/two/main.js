// let elements = document.querySelectorAll("img");
// for(let i = 0;i < elements.length; i++){
//     elements[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
//     elements[i].setAttribute("alt","Elzero Logo");
// }
document.querySelectorAll("img").forEach((img) => {
img.setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
img.setAttribute("alt","Elzero Logo");
});