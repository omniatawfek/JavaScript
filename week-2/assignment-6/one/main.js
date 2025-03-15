<<<<<<< HEAD
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if (typeof friends[index] != 'number' && friends[index][0] != "A") {
        console.log(`${++counter} => ${friends[index]}`);
    }
    index++
=======
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if (typeof friends[index] != 'number' && friends[index][0] != "A") {
        console.log(`${++counter} => ${friends[index]}`);
    }
    index++
>>>>>>> 9527b62c45189773d69999426553a8efecf4968d
}