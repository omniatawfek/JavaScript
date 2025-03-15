let number = prompt("please enter a number: ");
let flag = 0;
if (number == 0 || number == 1)
    console.log("It is not a prime number");
else {
for(let i = 2 ;i< number ; i++) {
    if(number % i == 0)
        flag =1;
}
if (!flag)
    console.log("It is a prime number");
else console.log("It is not  a prime number");
}