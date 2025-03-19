function checkStatus(a, b, c) {
    let arr = [a,b,c];
    for(let i = 0; i < arr.length; i++) {
        (typeof arr[i] === 'string')?
        ( Name = arr[i]):
        (typeof arr[i] === 'number')?
        (Age = arr[i]):
        (Boolean = arr[i]);
    }
    if(Boolean)
        console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`);
    else  console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`);
  } 
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"