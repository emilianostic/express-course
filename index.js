const express = require("express");

const morgan = require('morgan')

const app = express();

app.set('case sensitive routing', true) //para Case sensitive
app.set('appName', 'Express Course')
app.set('port', 3000)


//middleware, MORGAN
app.use(morgan('dev'));//muestra mensaje por consola


app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get("/Dashboard", (req, res) => {
  res.send("dashboard page");
});



app.all("/about", (req, res) => {
  res.send("about page");
});

app.listen(`${app.get('port')}`);
console.log(`Serve ${app.get('appName')} on port ${app.get('port')}`);
