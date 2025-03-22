let myString = "EElllzzzzzzzeroo";

let solution = myString.split("")
.filter(function (ele,index,arr) {
  return arr.indexOf(ele) === index
}).reduce((acc,curr) => `${acc}${curr}` )


console.log(solution);
// Elzero