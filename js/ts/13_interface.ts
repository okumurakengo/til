interface GameUser {
    score: number;
    showScore(): void;
}

class User implements GameUser {
    public name: string;
    public score: number = 0;
    constructor(name: string) {
        this.name = name;
    }
    public sayHi(): void {
        console.log("hi! i am " + this.name);
    }
    public showScore(): void {
        console.log("score " + this.score);
    }
}
(new User("a")).showScore()
