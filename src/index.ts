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

    constructor(
        public first: string,
        public last: string,
        protected _score: number
    ) {}

    private secretMethod(): void {
        console.log("Secret Method!");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be less than 0.");
        }
        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 9999999;
    }
}

const sammy = new Player("Sammy", "Clark", 100);
sammy.fullName;
sammy.score = 99;

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}

    print() {
        console.log(`${this.brand}`);
    }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Schott", "brown");

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
}

class FullTime extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }

    getPay(): number {
        return this.salary;
    }
}

class PartTime extends Employee {
    constructor(
        first: string,
        last: string,
        private hourlyRate: number,
        private hoursWorked: number
    ) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTime("Betty", "White", 95000);
const bill = new PartTime("Bill", "Bob", 15, 40);

console.log(betty.getPay());
console.log(bill.getPay());
