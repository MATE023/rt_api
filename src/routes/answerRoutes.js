const express = require('express');
const router = express.Router();

const a = require('./../entities/Answer');
const answers = a.answers;

const answersDb = require('./../services/rt');

//answers: id, content
// Get all answers
router.get('/answers', async (req, res) => {
  //res.json(answers);
  try {
    res.json(answersDb.getAll(req.query.page, "answer"));
  } catch(err) {
    console.error(`Error while getting answers `, err.message);
    next(err);
  }
});

router.get('/answers/:id', async (req, res) => {
    /*answers.forEach(element => {
        if(req.params.id == element.id)
        {
            res.json(element);
        }
    })*/
    try {
        res.json(answersDb.getSingle(req.query.page, "answer", req.params.id));
        } catch(err) {
        console.error(`Error while getting answer with id: ${req.params.id}`, err.message);
        //next(err);
    }  
});

module.exports = router;