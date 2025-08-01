let theNumber = 100020003000;
console.log(Number([...new Set(String(theNumber))].sort().slice(true).join("")));
