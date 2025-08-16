// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

class Car {
    constructor(name,model,price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run () {
        return "Car Is Running";
    }
    stop () {
        return "Car Is Stopped";
    }
}
let carOne = new Car("MG",2022,420000);
let carTwo = new Car("W",2021,320000);
let carThree = new Car("L",2020,220000);

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carThree.run());