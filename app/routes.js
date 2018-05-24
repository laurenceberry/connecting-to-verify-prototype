const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

module.exports = router

router.get('/check-if-you-need-verify', function (req, res) {
  res.render(
    "check-if-you-need-verify/" + req.params.page
  );
})

router.get('/design-and-research', function (req, res) {
  res.render(
    "design-and-research/" + req.params.page
  );
})

router.get('/build-your-service', function (req, res) {
  res.render(
    "build-your-service/" + req.params.page
  );
})

router.get('/connect-to-verify', function (req, res) {
  res.render(
    "connect-to-verify/" + req.params.page
  );

})
