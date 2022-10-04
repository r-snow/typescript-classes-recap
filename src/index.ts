class Player {
    readonly first: string;
    readonly last: string;
    private score = 0;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void {
        console.log("Secret Method!");
    }
}

const sammy = new Player("Sammy", "Clark");
sammy.secretMethod();
