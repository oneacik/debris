class Score extends Actor {
    static add(score) {
        Score.score += score;
    }

    static getScore() {
        return Score.score;
    }
}

Score.score = 0;
//TODO: Probably not an actor
