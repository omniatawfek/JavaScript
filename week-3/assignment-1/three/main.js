function ageInTime(theAge) {
    let months = theAge*12;
    let weeks = months*4;
    let days = weeks*7;
    let hours = days*24;
    let minutes = hours*60;
    if(theAge>10&&theAge<100) {
        console.log(`${months} Months
                     ${weeks} Weeks
                     ${days} Days
                     ${hours} Hours
                     ${minutes} Minutes`);
    }else
    console.log("Age Out Of Range");
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months