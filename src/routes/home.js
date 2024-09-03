const { Router } = require("express");

const axios = require("axios");

const router = Router();

router.get("/", (req, res) => {
  let isActive = true;

  res.render("index", {
    title: "Index page",
    isActive,
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  res.render("posts", {
    posts: response.data,
  });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
