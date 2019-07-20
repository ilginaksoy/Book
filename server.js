const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./Helper/db")(); //mongodb yi çalıştırıyor

const book = require('./routers/book');
const author = require('./routers/author');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/book', book); //book endpoint ine yönlendiriyor
app.use('/api/author', author); //book endpoint ine yönlendiriyor

const port = 3005;


app.get('/',(req,res)=> {
  res.send("indexsayfası");

})
app.listen(port,() => console.log(`server listening port ${port}`));
