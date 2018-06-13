const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.post('/existing-database-answer', function (req, res) {

  // Make a variable and give it the value from 'existing-database'
  var existingDatabase = req.session.data['existing-database']
  // Check whether the variable matches a condition
  if (existingDatabase == "yes"){
    // Send user to next page
    res.redirect('/matching/outcome-1-check')
  }
  else {
    // Send user to next question
    res.redirect('/matching/returning-users')
  }

})

router.post('/returning-users-answer', function (req, res) {

  // Make a variable and give it the value from 'returning-users'
  var returningUsers = req.session.data['returning-users']
  // Check whether the variable matches a condition
  if (returningUsers == "yes"){
    // Send user to next page
    res.redirect('/matching/outcome-2')
  }
  else {
    // Send user to next question
    res.redirect('/matching/outcome-3')
  }

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
