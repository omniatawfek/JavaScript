let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs.concat(arr1,arr2);

console.log(allArrs.concat(arr1,arr2).sort().slice(arr2.length)); // fxy