

const {Router} = require('express')

const router = Router()

router.get("/", (req, res) => {

  let isActive = true

  res.render("index", {
    title: "Index page",
    isActive
  });
});


router.get("/about", (req, res) => {

  res.render("about");
});


router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;