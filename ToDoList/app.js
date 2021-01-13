const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var day = "";
var Day = new Date();
var items = [];
var workItems = [];

const options = { weekday: 'long',  month: 'long', day: 'numeric' };
day = Day.toLocaleDateString("en-US",options);

app.get("/",function(req,res) {
  res.render('list',{todayDay:day,listItems:items});
});

app.post("/",function(req,res) {
  let myCurrentPage = req.body.myList;
  if(myCurrentPage==="Work")
  {
    workItems.push(req.body.taskItem);
    res.redirect("/work");
  }
  else {
    items.push(req.body.taskItem);
    res.redirect("/");
  }
});

app.get("/work",function(req,res) {
  res.render('list',{todayDay:"Work",listItems:workItems});
});

app.post("/work",function(req,res) {
  workItems.push(req.body.taskItem);
  res.redirect("/work");
});

app.get("/about",function(req,res) {
  res.render('about');
})

app.listen(3000,function(req,res) {
  console.log("The server is running on port 3000.");
});
