let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']
let re = /os\d*o/ig;
console.log(specialNames.match(re));