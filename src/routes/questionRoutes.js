const express = require('express');
const router = express.Router();

const s = require('./../entities/Solution');
const q = require('./../entities/Question');
const solutions = s.solutions;
const questions = q.questions;


router.get('/questions/:id/solutions', async (req, res) => {
    const id = req.params.id;
    currQuestions = [];
    questions.forEach(q => {
        if (q.solutionId == id) {
            currQuestions.push(q);
        }
    });
    res.json(currQuestions);
});

module.exports = router;