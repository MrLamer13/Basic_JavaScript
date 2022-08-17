/**
 * Задавание вопросов и получение ответов.
 */
let questioner = {
    getAnswer() {

        const playerAnswers = [];
        const availableAnswers = [1, 2, 3];

        for (let i = 0; i < questions.length; i++) {
            let answer = parseInt(prompt(`Введите номер правильного ответа или "Отмена" для выхода.\n${questions[i]}\n${answers[i]}`));
            if (isNaN(answer)) {
                return null;
            }

            if (!availableAnswers.includes(answer)) {
                alert('Необходимо ввести номер правильного ответа: 1, 2 или 3.');
                continue;
            }
            playerAnswers.push(answer);

        }
        return playerAnswers;
    }

};