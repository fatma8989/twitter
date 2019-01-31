var express = require('express');
var Twitter = require('twitter');
var router = express.Router();
var keys = require('../keys/twitterKeys')

let client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
});
/* GET home page. */
router.get('/', async (req, res, next) => {
  var params = {screen_name: 'fatmafouad_y'};
  let tweets = await client.get('statuses/user_timeline', params)
  let listOfTweets = []
  // for(let index in tweets){
  //   let tweet = tweets[index]
  // }
  // for(let tweet of tweets){
    
  // }
  for(let i =0 ;i < tweets.length ;i++){
    let tweet = tweets[i]
    // method 1
    // entry = {}
    // entry.text = tweet.text
    // entry.reply = tweeet.in_reply_to_screen_name
    // listOftext.push( entry )
    // method 2
    // listOftext.push({text:tweet.text,reply:tweeet.in_reply_to_screen_name})
    // method 3
    // entry = {text:tweet.text,reply:tweeet.in_reply_to_screen_name}
    // listOftext.push( entry )
    
  }
  
  res.render('index', { title: 'Express' ,list:listOftext});
});

module.exports = router;
