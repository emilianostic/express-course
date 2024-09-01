const express = require("express");

const morgan = require('morgan')

const app = express();
const path = require('path')

//settings
app.set('case sensitive routing', true) //para Case sensitive
app.set('appName', 'Express Course')
app.set('port', 3000)


//middleware, MORGAN
app.use(morgan('dev'));//muestra mensaje por consola


app.get("/nota.txt", (req, res) => {
  res.send("esto no es un archivo");
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get("/Dashboard", (req, res) => {
  res.send("dashboard page");
});

console.log(__dirname)

app.all("/about", (req, res) => {
  res.send("about page");
});

app.use('/public',express.static(path.join(__dirname, 'public')))//se puede acceder a todo lo que está dentro de la carpeta public. Con el primer public obligo a poner el slash por si un archivo se llama igual que una ruta. Va al final delas rutas. Ej nota.txt


app.listen(`${app.get('port')}`);
console.log(`Serve ${app.get('appName')} on port ${app.get('port')}`);
