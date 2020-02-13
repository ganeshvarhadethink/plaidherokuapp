const express = require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const user = require('./routes/user.route');


const uri = "mongodb+srv://Admin-Nilesh:sonyw910i@cluster0-cgksn.mongodb.net/test?retryWrites=true&w=majority";
const app = express();

mongoose.connect(uri,{ useNewUrlParser: true ,useUnifiedTopology: true } );
mongoose.set('useCreateIndex', true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/User', user);



let port =process.env.PORT||3001
  app.listen(port,function(){
    console.log("server started on port 3001.",port);
  });