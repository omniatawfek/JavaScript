<<<<<<< HEAD
// let day = "   friday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

switch(day.trim().charAt(0).toUpperCase() + day.trim().slice(1)) {
case "Friday" :
case "Saturday" :
case  "Sunday" :
    console.log("No Appointments Available");
    break;
case "Monday" :
case "Thursday" :
    console.log("From 10:00 AM To 5:00 PM");
    break;
case "Tuesday" :
    console.log("From 10:00 AM To 6:00 PM");
    break;
case "Wednesday" :
    console.log( "From 10:00 AM To 7:00 PM");
    break;
default :
console.log("Its Not A Valid Day");
=======
// let day = "   friday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

switch(day.trim().charAt(0).toUpperCase() + day.trim().slice(1)) {
case "Friday" :
case "Saturday" :
case  "Sunday" :
    console.log("No Appointments Available");
    break;
case "Monday" :
case "Thursday" :
    console.log("From 10:00 AM To 5:00 PM");
    break;
case "Tuesday" :
    console.log("From 10:00 AM To 6:00 PM");
    break;
case "Wednesday" :
    console.log( "From 10:00 AM To 7:00 PM");
    break;
default :
console.log("Its Not A Valid Day");
>>>>>>> 9527b62c45189773d69999426553a8efecf4968d
}