let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let solution = mix.map((ele) => isNaN(ele) ? ele : "" ).reduce((acc,current) => `${acc}${current}`);
console.log(solution);
// Elzero