const express = require("express");
const router = express.Router();
const Book = require("../models/book");

router.get('/', (req,res) => {
  console.log('api/book page');
  res.json({status:1}); //the response
});

//this is addBook endpoint
router.post('/addBook', (req, res) => {console.log("it is in the addBook")
  const book = new Book(req.body); //from postman
  const promise = book.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  }) //to make sure that the data came
});

module.exports  = router;
