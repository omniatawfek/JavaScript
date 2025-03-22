// Method One
let objMethodOne = {
    property:1
};

console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = new Object({
    property:2
});

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create({
    property:3
});


console.log(objMethodThree.property); // "Method Three"

// Method Four

let objMethodFour = Object.assign({},{property:4});

console.log(objMethodFour.property); // "Method Four"