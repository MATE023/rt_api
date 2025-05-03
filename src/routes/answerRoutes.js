const express = require('express');
const router = express.Router();

const a = require('./../entities/Answer');
const answers = a.answers;
const q = require('./../entities/Question');
const questions = q.questions;

//answers: id, content, questionId
// Get all answers
router.get('/answers', async (req, res) => {
  res.json(answers);
});

router.get('/answers/:id', async (req, res) => {
    answers.forEach(element => {
        if(req.params.id == element.id)
        {
            res.json(element);
        }
    })
});

router.get('/answers/question/:id', async (req, res) => {
    currAnswers = []
    answers.forEach(ans => {
        if(req.params.id == ans.questionId) {
            currAnswers.push(ans);
        }
    })
    res.json(currAnswers);
});

module.exports = router;