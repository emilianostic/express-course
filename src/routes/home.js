

const {Router} = require('express')

const router = Router()


router.all("/about", (req, res) => {
  res.send("about page");
});


router.get("/Dashboard", (req, res) => {
  res.send("dashboard page");
});

module.exports = router;