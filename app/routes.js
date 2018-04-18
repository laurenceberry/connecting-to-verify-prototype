const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

module.exports = router

router.get('/what_is_verify', function (req, res) {
  res.render(
    "what_is_verify/" + req.params.page
  );
})

router.get('/check_i_need_verify', function (req, res) {
  res.render(
    "check_i_need_verify/" + req.params.page
  );
})

router.get('/design_and_build', function (req, res) {
  res.render(
    "design_and_build/" + req.params.page
  );
})

router.get('/before_you_connect', function (req, res) {
  res.render(
    "before_you_connect/" + req.params.page
  );
})

router.get('/connect_to_verify', function (req, res) {
  res.render(
    "connect_to_verify/" + req.params.page
  );

})
