let myIdElement = document.getElementById("elzero");
console.log(myIdElement);
let myTagElement = document.getElementsByTagName("div");
console.log(myTagElement[0]);
let myClassName = document.getElementsByClassName("element");
console.log(myClassName[0]);
let myname = document.getElementsByName("js");
console.log(myname[0]);

let myQueryElemnt = document.querySelector("#elzero");
console.log(myQueryElemnt);
let myqueryElemnt = document.querySelector(".element");
console.log(myqueryElemnt);
let myqueryelemnt = document.querySelector("[name = js]");
console.log(myqueryelemnt);
let myQuery = document.querySelector("div");
console.log(myQuery);

let myquery = document.querySelectorAll("#elzero");
console.log(myquery[0]);
let queryElemnt = document.querySelectorAll(".element");
console.log(queryElemnt[0]);
let Queryelemnt = document.querySelectorAll("[name = js]");
console.log(Queryelemnt[0]);
let myElement = document.querySelectorAll("div");
console.log(myElement[0]);

let element = document.body.children;
console.log(element[0]);

let Elements = document.body.firstElementChild;
console.log(Elements);
