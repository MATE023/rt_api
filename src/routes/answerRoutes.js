const express = require('express');
const router = express.Router();

const a = require('./../entities/Answer');
const answers = a.answers;

//answers: id, content
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

module.exports = router;