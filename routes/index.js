var express = require("express");
var router = express.Router();
/*test messaged */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Message",
    messages: messages,
  });
});

router
  .route("/new")
  .all(function (req, res, next) {
    next();
  })
  .get(function (req, res) {
    res.render("form", {});
  })
  .post(function (req, res, next) {
    messages.push({
      text: req.body.message,
      user: req.body.name,
      added: new Date(),
    });
    res.redirect("/");
  });

module.exports = router;
