var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// POST method route
router.post('/formAnswer', function (req, res) {
  // res.send('Bienvenue'.concat(req.body.title))
  res.render('formAnswer', {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  });
});

module.exports = router;