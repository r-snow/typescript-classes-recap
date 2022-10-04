class Player {
    static description = "Player description";
    #score = 0;
    #numLives = 10;
    constructor(name) {
        this.name = name;
    }

    static randomPlayer() {
        return new Player("Andy");
    }

    get nickname() {
        return `${this.name}anator`;
    }
    get score() {
        return this.#score;
    }

    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be greater than 0!");
        }
        this.#score = newScore;
    }

    taunt() {
        console.log("booyah!");
    }
    loseLife() {
        this.#numLives -= 1;
    }
    getScore() {
        return this.#score;
    }
    updateScore(newScore) {
        this.#score = newScore;
    }
}

const player1 = new Player("Ryan");
// console.log(player1);
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1.score);
// player1.updateScore(28);
console.log(player1.score);
player1.score = 400;
console.log(player1.score);

console.log(player1);
// console.log(player1.nickname);
// const player2 = new Player("Mike");
// player2.taunt();
