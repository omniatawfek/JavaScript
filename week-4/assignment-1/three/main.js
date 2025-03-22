let myArray = ["E", "l", "z", ["e", "r"], "o"];

let solution = myArray
.reduce((acc,curr) => acc.concat(curr),[])
.reduce((acc,curr) => `${acc}${curr}`);
console.log(solution);
// Elzero