let theName = "Elzero";
console.log(theName.split(""));
console.log([...theName]);
console.log(Array.from(theName));

let arr = [];
for(let i = 0; i < theName.length; i++)
{
    arr.push(theName[i]);
}
console.log(arr);
