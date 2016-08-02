var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/marvel', function(req, res, next) {
  res.render('marvel');
});

router.get('/clipboard', function(req, res, next) {
  res.render('clipboard');
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

router.get('/burger', function(req, res, next) {
  res.render('burger');
});

router.get('/scraper', function(req, res, next) {
  res.render('scraper');
});

router.get('/reactScraper', function(req, res, next) {
  res.render('reactScraper');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
