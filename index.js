const express = require("express");

const morgan = require('morgan')

const app = express();
//middleware, MORGAN
app.use(morgan('dev'));//muestra mensaje por consola

app.get("/profile", (req, res) => {
    res.send("profile page");
  });


app.get("/dashboard", (req, res) => {
  res.send("dashboard page");
});



app.all("/about", (req, res) => {
  res.send("about page");
});

app.listen(3000);
console.log(`Serve on port ${3000}`);
