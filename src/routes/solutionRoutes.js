const express = require('express');
const router = express.Router();

const s = require('./../entities/Solution');
const q = require('./../entities/Question');
const solutions = s.solutions;
const questions = q.questions;
//solutions: id, questions, timeComplexity, spaceComplexity
// Get all solutions
router.get('/solutions', async (req, res) => {
  res.json(solutions);
});

router.get('/solutions/:id/questions', async (req, res) => {
    currQuestions = [];
    solutions.forEach(sol => {
        if(sol.id == req.params.id)
        {
            sol.questionIds.forEach(id => {
                questions.forEach(ques => {
                    if (ques.id == id)
                    {
                        currQuestions.push(ques);
                    }
                })
            })
        }
    });
    res.json(currQuestions);
});

router.post('/solutions', (req, res) => {
    const solution = req.body;
    solution.id = (Number(solutions[solutions.length-1].id)+1).toString();
    solutions.push(solution);
    res.status(201).json(solutions);
})

router.put('/solutions/:id', (req, res) => {
    const id = req.params.id;
    const updatedSolution = req.body;
    solutions[id] = updatedSolution;
    res.json(updatedSolution);
})

router.delete('/solutions/:id', (req, res) => {
    const id = req.params.id;
    solutions.splice(id, 1);
    res.status(204).send();
})

module.exports = router;