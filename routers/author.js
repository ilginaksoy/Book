const express = require("express");
const router = express.Router(); //express içerisindeki router
const Author = require("../models/author");
const mongoose = require("mongoose");

router.get('/', (req,res) => {
  console.log('api/author sayfası');
  res.json({status:1}); //web in verdiği response
});

router.post('/addAuthor', (req, res) => {
  const author = new Author(req.body); //postman'deb gelecek geliyor
  const promise = author.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
  });
  //datanın geldiğinden emin olmak için -- endpoint router la yapıldı

/*  router.get('/getBooks/:author_id',(req,res)=> {
      const promise = Author.aggregate([
        {
          $match: {
            '_id': mongoose.Types.ObjectId(req.params.author_id);
          }
          },

        {
            $lookup: {
              from: 'book',
              localField: '_id',
              foreignField:'author_id',
              as: 'books'
            }
            },

          {
              $unwind:{
                path:'books',
              }
              },

          {
              $group:{
              _id: {
                  _id: '$_id',
                  name: '$name',
                  surname: '$surname',
                  bio: 'bio',
              },
              books:{
                $push: '$books'
              }
              }
              }
      ]);
      promise.then((data)=> {
          res.json(data)
      }).catch((err)=> {
          res.json(err)
      })
}); */


router.get('/getBooks/:author_id', (req, res) => {
	const promise = Author.aggregate([
		{
			$match: {
				'_id': mongoose.Types.ObjectId(req.params.author_id)
			}
		},
		{
			$lookup: {
				from: 'books',
				localField: '_id',
				foreignField: 'author_id',
				as: 'books'
			}
		},
		{
			$unwind: {
				path: '$books'
				//preserveNullAndEmptyArrays: true
			}
		},
		{
			$group: {
				_id: {
					_id: '$_id',
					name: '$name',
					surname: '$surname',
					bio: '$bio'
				},
				books: {
					$push: '$books'
				}
			}
		},
		{
			$project: {
				_id: '$_id._id',
				name: '$_id.name',
				surname: '$_id.surname',
				books: '$books'
			}
		}
	]);

	promise.then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	});
});



module.exports  = router;
