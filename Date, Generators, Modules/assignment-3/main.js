let date = new Date();
date.setDate(0);
console.log(date);
let arr = ["january","february","march","april","may","june","july","august","september","actober","november","december"]
console.log(`Previous Month Is ${arr[date.getMonth()]} And Last Dat Is ${date.getDate()}`);
