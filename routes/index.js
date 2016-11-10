var express = require('express');
var router = express.Router();
var BingTranslateAPI = require('../class/BingTranslateAPI');
var CognitiveAPI = require('../class/CognitiveAPI');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/translate', function(req, res, next) {
  var text = req.body.text;
  BingTranslateAPI.requestBingTranslate(text, function(data) {
    res.json(data);
    res.end();
  });
});


router.post('/sentiment', function(req, res, next) {
  var translated_text = req.body.text;
  CognitiveAPI.requestTextEmotionAPI("Sentiment", "hose.kim92", translated_text, function(body) {
    res.json(JSON.stringify(body));
    res.end();
  });
});
module.exports = router;
