var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RJS' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contactme', { title: 'Contact' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


module.exports = router;
