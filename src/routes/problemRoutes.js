const express = require('express');
const router = express.Router();

const p = require('./../entities/Problem');
const s = require('./../entities/Solution');
const problems = p.problems;
const solutions = s.solutions;
var currSols;

const problemsDb = require('./../services/rt');

//problems: id, title, description, url, deifficulty, topics, solutions, createdAt
// Get all problems
router.get('/problems', async (req, res) => {
  //res.json(problems);
  try {
    res.json(problemsDb.getAll(req.query.page, "problem"));
  } catch(err) {
    console.error(`Error while getting problems `, err.message);
    next(err);
  }
});

router.get('/problems/:id', async (req, res) => {
    /*problems.forEach(element => {
        if(req.params.id == element.id)
        {
            res.json(element);
        }
    })*/
    try {
        res.json(problemsDb.getSingle(req.query.page, "problem", req.params.id));
        } catch(err) {
        console.error(`Error while getting problem with id: ${req.params.id}`, err.message);
        //next(err);
    }
});

router.post('/problems', (req, res) => {
    const problem = req.body;
    problem.id = (Number(problems[problems.length-1].id)+1).toString();
    problems.push(problem);
    res.status(201).json(problems);
})

router.put('/problems/:id', (req, res) => {
    const id = req.params.id;
    const updatedProblem = req.body;
    problems[id] = updatedProblem;
    res.json(updatedProblem);
})

router.get('/problems/:id/solutions', (req, res) => {
    /*currSols = [];
    solutions.forEach(sol => {

        if (sol.problemId == req.params.id)
        {
            currSols.push(sol);
        } 
    });
    res.json(currSols);*/
    try {
        res.json(problemsDb.getMultiple(req.query.page, `SELECT * FROM solution WHERE problem_id = ${req.params.id}`));
        } catch(err) {
        console.error(`Error while getting solutions for problem with id: ${req.params.id}`, err.message);
        //next(err);
    }
})
/*
router.get('/problems/:id/soltutions/:id', (req, res) => {
    const id = req.params.id;
    const updatedProblem = req.body;
    problems[id] = updatedProblem;
    res.json(updatedProblem);
})
*/
router.delete('/problems/:id', (req, res) => {
    const id = req.params.id;
    problems.splice(id, 1);
    res.status(204).send();
})
/*
const getProblems = (): Problem[] => {
    var da = new Date();
    return [
        { id: 1, title: 'Two Sum', num: 1, description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', difficulty: 'easy', url: new URL('https://leetcode.com/problems/two-sum'), topics: ["hashmap, arrays"], createdAt:  da.getDate(), subQuestions: []},
        { id: 2, title: 'Add Two Numbers', num: 2, description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list', difficulty: 'medium', url: new URL("https://leetcode.com/problems/add-two-numbers"), topics: ["arrays"], createdAt:  da.getDate(), subQuestions: [] },
        { id: 3, title: 'Longest Substring Without Repeating Characters', num: 3, description: 'Given a string s, find the length of the longest substring without repeating characters', difficulty: 'medium', url: new URL("https://leetcode.com/problems/longest-substring-without-repeating-characters"), topics: ["strings, arrays"], createdAt:  da.getDate(), subQuestions: [] }
    ]; 
}
*/

module.exports = router;
