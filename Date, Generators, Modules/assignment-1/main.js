let myDate = new Date("3 3 2004");
let date = new Date();

console.log(`${(date - myDate) /1000} Seconds`);
console.log(`${(date - myDate) /1000 / 60} Minutes`);
console.log(`${(date - myDate) /1000 /60 / 60} Hours`);
console.log(`${(date - myDate) /1000 /60 / 60 / 24} Days`);
console.log(`${(date - myDate) /1000 /60 / 60 / 24 / 30} Months`);
console.log(`${(date - myDate) /1000 /60 / 60 / 24 / 30 / 12} Years`);