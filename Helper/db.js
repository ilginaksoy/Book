const mongoose = require("mongoose");
//heroku connection
module.exports = () => {
    mongoose.connect("mongodb://Ilgin:ilgin123*@ds351987.mlab.com:51987/heroku_bfsx8q7x", {
        useNewUrlParser: true
      })
      mongoose.connection.on('open',()=> {
          console.log('MongoDB: Connected')
      })
      mongoose.connection.on('error',(err)=> {
        console.log('MongoDB error',err)
    })

};
