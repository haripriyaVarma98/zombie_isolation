var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function (req, res, next) {
  res.render('login_form');
});

router.get('/register', function (req, res, next) {
  res.render('register');
});

router.post('/login', (req, res, next) => {
  console.log(req.body);
  
});

module.exports = router;
