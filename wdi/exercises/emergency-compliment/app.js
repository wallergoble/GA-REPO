
var express = require("express")
var app = express()
var compliments = require("./models/compliment")
var colors = require("./models/color")

app.set("view engine","pug")
app.use(express.static(__dirname + "/public"))

function getRandomCompliment(module) {
  var randomIndex = Math.floor(Math.random() * module.length);
  var randomInstance = module[randomIndex];
  return randomInstance;
}
app.get("/", function( req, res ){
  var randomColor = getRandomCompliment(color)
  var randomCompliment = getRandomCompliment(compliment)
  res.render('index', { compliment: randomCompliment, color: randomColor});
});

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})
