const express = require("express");
const app = express();
//middleware
app.use((req, res, next) => {
    console.log(`Route: ${req.url} Metodo: ${req.method}`);
    next();
  });

app.get("/profile", (req, res) => {
    res.send("profile page");
  });

//middleware
app.use((req, res, next) => {
  if (req.query.login === "emilianostic.com") {
    next();
  } else {
    res.send("no autorizado");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("dashboard page");
});



app.all("/about", (req, res) => {
  res.send("about page");
});

app.listen(3000);
console.log(`Serve on port ${3000}`);
