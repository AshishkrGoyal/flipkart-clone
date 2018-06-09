const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const User = require('./models/users');

mongoose.connect('mongodb://localhost:27017/flipkart', function (err) {
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log("database has been connected!!");
  }
});

const app = express();

const port = 4040;


app.use(logger('dev'));


app.get('/local', function (req, res) {
  res.send("Ashish kr at local route ");
})

app.listen(port,function (err) {
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log("server has been started!!");
  }
})