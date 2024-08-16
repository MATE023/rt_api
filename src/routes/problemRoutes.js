const express = require('express');
const router = express.Router();

const problem = {
    id: '1',
    title: 'two sum',
    description: 'description'
};
const problems = [problem];

// Get all users
router.get('/problems', async (req, res) => {
  res.json(problems);
});

router.post('/problems', (req, res) => {
    const problem = req.body;
    problems.push(problem);
    res.status(201).json(problems);
})

router.put('/problems/:id', (req, res) => {
    const id = req.params.id;
    const updatedProblem = req.body;
    problems[id] = updatedProblem;
    res.json(updatedProblem);
})

router.delete('/users/:id', (req, res) => {
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
