const express = require('express');
const router = express.Router();

const s = require('./../entities/Solution');
const q = require('./../entities/Question');
const p = require('./../entities/Problem')
const solutions = s.solutions;
const questions = q.questions;
const problems = p.problems;

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

router.get('/solutions/:id', async (req, res) => {
    solutions.forEach(element => {
        if(req.params.id == element.id)
        {
            res.json(element);
        }
    })
});

router.get('/solutions/problems/:id', async (req, res) => {
    currSolutions = [];
    solutions.forEach(sol => {
        if (sol.problemId == req.params.id) {
            currSolutions.push(sol);
        }
    });
    res.json(currSolutions);
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