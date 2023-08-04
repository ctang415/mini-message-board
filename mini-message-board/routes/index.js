const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "First post!",
    user: "Carrie",
    added: new Date(),
  },
  {
    text: "What's up everyone?",
    user: "Brandon",
    added: new Date()
  },
  {
    text: "What's going on here? :)",
    user: "Timmy",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages })
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: "Post a New Message"})
})

router.post('/new', function (req, res, next) {
  messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date()})
  res.redirect('/')
})

module.exports = router;
