const express = require("express");
const app = express();
const port = 8000;
var cors=require('cors');
var bodyParser=require('body-parser');

var userroute = require('./routes/user');
var performroute = require('./routes/perform');
app.use(cors());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//routes
app.use('/user', userroute);
app.use('/perform', performroute);







app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);