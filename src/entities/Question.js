const a = require('./../entities/Answer');
const answers = a.answers;

const question1 = {
    id: '1',
    content: 'What data structure should we use?',
    answerChoiceIds: ['1', '2', '3', '4'],
    answerChoices: [answers[0], answers[1], answers[2], answers[3]],
    correctAnswer: '1'
}

const question2 = {
    id: '2',
    content: 'What should the keys and values of the hashmap be?',
    answerChoiceIds: ['5', '6', '7', '8'],
    answerChoices: [answers[4], answers[5], answers[6], answers[7]],
    correctAnswer: '6'
}

const question3 = {
    id: '3',
    content: 'What should you search for in the hashmap?',
    answerChoiceIds: ['9', '10', '11', '12'],
    answerChoices: [answers[8], answers[9], answers[10], answers[11]],
    correctAnswer: '11'
}

const question4 = {
    id: '4',
    content: 'What is the access time of the hashmap?',
    answerChoiceIds: ['13', '14', '15', '16'],
    answerChoices: [answers[12], answers[13], answers[14], answers[15]],
    correctAnswer: '16'
}

const question5 = {
    id: '5',
    content: 'What is the answer2?',
    answerChoiceIds: ['13', '14', '15', '16'],
    answerChoices: [answers[12], answers[13], answers[14], answers[15]],
    correctAnswer: '16'
}

const question6 = {
    id: '6',
    content: 'What is the answer2?',
    answerChoiceIds: ['13', '14', '15', '16'],
    answerChoices: [answers[12], answers[13], answers[14], answers[15]],
    correctAnswer: '16'
}

const question7 = {
    id: '7',
    content: 'What is the answer2?',
    answerChoiceIds: ['13', '14', '15', '16'],
    answerChoices: [answers[12], answers[13], answers[14], answers[15]],
    correctAnswer: '16'
}

const question8 = {
    id: '8',
    content: 'What is the answer2?',
    answerChoiceIds: ['13', '14', '15', '16'],
    answerChoices: [answers[12], answers[13], answers[14], answers[15]],
    correctAnswer: '16'
}

module.exports.questions = [question1, question2, question3, question4, question5, question6, question7, question8];
module.exports.questions2 = [question5, question6, question7, question8];