const mongoose = require("mongoose");

module.exports = () => {

    mongoose.connect("mongodb://localhost:27017/DBBOOK", {
        useNewUrlParser: true
      })
      mongoose.connection.on('open',()=> {
          console.log('MongoDB: Connected')
      })
      mongoose.connection.on('error',(err)=> {
        console.log('MongoDB error',err)
    })

};
