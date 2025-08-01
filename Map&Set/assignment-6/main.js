let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];


let count = 0;
for(let i = 0; i < chars.length; i++){
    if(typeof(chars[i]) === 'number')
        count++;
}

console.log(chars.sort().copyWithin(0,count,count*2));
