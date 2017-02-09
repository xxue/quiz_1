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
  let date_ran = new Date();
  let date ="Posted on: "+ date_ran.toDateString();
  // let tweets = cookies.tweet;
  // let name = cookies.name.split(",");
  // let date = cookies.dates.split(",");
  //  if (!tweets) {
  //    tweets = [];
  //    res.cookie('tweets', tweets, {maxAge: 3000000000});
  //    res.render('dashboard', {faker, trending});
  //  } else {
  //    tweets = tweets.split(',');
  //    res.render('dashboard', {tweets, trending});
     res.render('dashboard', {trending, faker, cookies, date});
 });

 router.post('/dash', function(req, res, next){
   let params = req.body;
   let cookies = req.cookies;
   res.cookie( `${params.name}`, params.tweet, {maxAge : 20000000} );
   res.redirect('/dash');
 });

// router.post('/dash', function(req, res) {
//   const params = req.body;
//   const user = params.user;
//   const tweets = params.tweet; //user input
//   let tweets = cookies.tweet; //the actual tweets
//   if (tweets.length > 255) {
//       tweets = "max 255 characters";
//     } else {
//       if (!tweets) {
//         tweets = tweets;
//       } else {
//         tweets = tweets.split(',');
//       }
//     }
//   res.cookie('tweets', tweets, {maxAge:2592000000 });
//   res.render('dashboard', {tweets, trending});
//   res.redirect('/dash');
// });



module.exports = router;
