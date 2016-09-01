var express = require('express');
var app = express();

var lowestScore = Infinity;

app.use('/static', express.static('public'));

app.get('/getScore', function (req, res) {
  console.log(lowestScore);
  res.json({"score": lowestScore});
});



app.get('/fewest-guesses', function (req, res) {
  console.log(fewest-guesses);
  res.json({"guesses": fewest-guesses});
});


app.get('/setScore', function (req, res) {

  console.log(req.query.score);
  lowestScore = (req.query.score < lowestScore)? req.query.score : lowestScore;
  console.log(lowestScore);
  res.json({"score": req.query.score});

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
