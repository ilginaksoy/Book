const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./Helper/db")(); //run the db
const book = require('./routers/book');
const author = require('./routers/author');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routers
app.use('/api/book', book);
app.use('/api/author', author);

var port = process.env.PORT || 3000;

//if there is no link, 'index page' will be appeared on the screen
app.get('/',(req,res)=> {
  res.send("index page");
});
//to see that the server conneciton is done.
app.listen(port,() => console.log(`server listening port ${port}`));
