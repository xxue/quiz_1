const express = require('express');
const router = express.Router();
const faker = require('faker');

let trending = [
  '#GreenCrabs',
  '#WhiteDeers',
  '#PaperMoon',
  '#RedDish',
  '#SnowRabbit',
  '#SetOf300',
]

router.get('/', function (req, res) {
  res.render('homepage');
})

router.get('/dash', function (req, res) {
  let cookies = req.cookies;
  let tweet = cookies.tweet;
  // let name = cookies.name.split(",");
  // let date = cookies.dates.split(",");
   if (!tweet) {
     tweets = [];
     res.cookie('tweets', {maxAge: 3000000000});
     res.render('dashboard', {faker, trending});
   } else {
     tweets = tweet.split(',');
     res.render('dashboard', {tweets, trending});
   }
 });

router.post('/dash', function(req, res) {
  let cookies = req.cookies;
  const params = req.body;
  const user = params.user;
  const tweet = params.tweet; //user input
  let tweets = cookies.tweet; //the actual tweets
  if (tweet.length > 255) {
      tweets = "max 255 characters";
    } else {
      if (!tweets) {
        tweets = tweet;
      } else {
        tweets = tweets.split(',');
      }
    }
  res.cookie('tweets', tweets, {maxAge:2592000000 });
  res.render('dashboard', {tweets, trending});
  res.redirect('/dash');
});

module.exports = router;
