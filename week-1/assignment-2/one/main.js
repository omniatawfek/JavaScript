<<<<<<< HEAD
// Add Variables Here
var numberOne = 10;
var numberTwo = 20;
// Ouput
console.log(numberOne+""+ numberTwo ); // Normal Concatenate => 1020
console.log(typeof(numberOne+""+numberTwo )); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof`${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo+"\n" +numberOne );
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`
  
);
/*
  Template Literals Way
  20
  10
=======
// Add Variables Here
var numberOne = 10;
var numberTwo = 20;
// Ouput
console.log(numberOne+""+ numberTwo ); // Normal Concatenate => 1020
console.log(typeof(numberOne+""+numberTwo )); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof`${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo+"\n" +numberOne );
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`
  
);
/*
  Template Literals Way
  20
  10
>>>>>>> 9527b62c45189773d69999426553a8efecf4968d
*/