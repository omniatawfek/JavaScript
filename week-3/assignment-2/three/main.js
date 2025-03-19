let print = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
  
  console.log(print("Osama")("Available")(4000)); // Osama, My Salary Is 4000
  console.log(print("Ahmed")("Not Available")()); // Iam Not Avaialble