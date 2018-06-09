const express = require('express');
const logger = require('morgan');


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