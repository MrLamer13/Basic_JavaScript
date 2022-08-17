let game = {
    run() {
        let playerAnswers = questioner.getAnswer();
        console.log(playerAnswers);
        let score = player.correctAnswer(trueAnswers, playerAnswers);
        if (confirm(`Конец игры, ваш счёт ${score}.\nХотите повторить?`)) {
            player.countCorrectAnswer = 0;
            this.run();
        }

    },

};

if (confirm('Хотите сыграть?')) {
    game.run();
}