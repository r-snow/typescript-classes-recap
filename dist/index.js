"use strict";
// class Player {
//     readonly first: string;
//     readonly last: string;
//     private score = 0;
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
//     private secretMethod(): void {
//         console.log("Secret Method!");
//     }
// }
class Player {
    // readonly first: string;
    // readonly last: string;
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("Secret Method!");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be less than 0.");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999999;
    }
}
const sammy = new Player("Sammy", "Clark", 100);
sammy.fullName;
sammy.score = 99;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.brand}`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Schott", "brown");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTime extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTime extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTime("Betty", "White", 95000);
const bill = new PartTime("Bill", "Bob", 15, 40);
console.log(betty.getPay());
console.log(bill.getPay());
