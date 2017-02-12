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
  let date = date_ran.toDateString();
  res.render('dashboard', {trending, faker, cookies, date});
 });

 router.post('/dash', function(req, res){
   let params = req.body;
   let cookies = req.cookies;
  // i, cookies[i];

   res.cookie( `${params.user}`, params.tweet, {maxAge : 2592000000} );
   res.redirect('/dash');
 });

module.exports = router;
