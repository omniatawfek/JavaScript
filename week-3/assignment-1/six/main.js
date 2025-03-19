function multiply(...numbers) {
    let res = 1;
    for(let i = 0 ; i < numbers.length ; i++) {
        if(typeof numbers[i] === 'string')
            continue;
        else numbers[i] = parseInt(numbers[i]);
        res *= numbers[i];
    }
    console.log(res);
}


multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000