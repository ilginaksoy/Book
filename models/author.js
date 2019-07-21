const mongoose = require("mongoose"); //the library which ensure the mongodb processes
const Schema = mongoose.Schema;

//author informations - for db
const author = new Schema({
  name: String,
  surname: String,
  bio: String,
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('author', author);
