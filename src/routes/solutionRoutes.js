const express = require('express');
const router = express.Router();

const s = require('./../entities/Solution');
const q = require('./../entities/Question');
const solutions = s.solutions;
const questions = q.questions;

const solutionsDb = require('./../services/rt');
//solutions: id, questions, timeComplexity, spaceComplexity
// Get all solutions
router.get('/solutions', async (req, res) => {
  //res.json(solutions);
  try {
    res.json(solutionsDb.getAll(req.query.page, "solution"));
  } catch(err) {
    console.error(`Error while getting solutions `, err.message);
    next(err);
  }
});

router.get('/solutions/:id/questions', async (req, res) => {
    /*currQuestions = [];
    questions.forEach(qu => {
        if(qu.solutionId == req.params.id)
        {
           currQuestions.push(qu);
        }
    });
    res.json(currQuestions);
    */
    try {
        res.json(solutionsDb.getMultiple(req.query.page, `SELECT * FROM question WHERE solution_id = ${req.params.id}`));
        } catch(err) {
        console.error(`Error while getting questions for solution with id: ${req.params.id}`, err.message);
        //next(err);
    }
});

router.get('/solutions/:id', async (req, res) => {
    /*solutions.forEach(element => {
        if(req.params.id == element.id)
        {
            res.json(element);
        }
    })*/
    try {
        res.json(solutionsDb.getSingle(req.query.page, "solution", req.params.id));
        } catch(err) {
        console.error(`Error while getting solution with id: ${req.params.id}`, err.message);
        //next(err);
    }
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