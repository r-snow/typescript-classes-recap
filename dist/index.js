"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("Secret Method!");
    }
}
const sammy = new Player("Sammy", "Clark");
sammy.secretMethod();
