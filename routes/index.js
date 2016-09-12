var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const content = {
    title: 'One lesson a day'
  };

  res.render('index', { title: content.title });
});

module.exports = router;
