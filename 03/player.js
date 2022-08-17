/**
 * Подсчёт правильных ответов.
 */
const player = {
    countCorrectAnswer: 0,

    correctAnswer(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] == arr2[i]) {
                this.countCorrectAnswer += 1;
            }
        }
        return this.countCorrectAnswer;
    },
};