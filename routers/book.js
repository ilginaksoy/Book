const express = require("express");
const router = express.Router(); //express içerisindeki router
const Book = require("../models/book");

router.get('/', (req,res) => {
  console.log('api/book sayfası');
  res.json({status:1}); //web in verdiği response
});

router.post('/addBook', (req, res) => {console.log("doru")
  const book = new Book(req.body); //postman'deb gelecek geliyor
  const promise = book.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  }) //datanın geldiğinden emin olmak için

});

module.exports  = router;
