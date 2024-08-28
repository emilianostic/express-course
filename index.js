//HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, and DELETE. These correspond to create, read, update, and delete (or CRUD)
const express = require("express");
//thunderClient: Client REST para no tener que crear frontend y poder hacer las peticiones
var app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/isAlive", (req, res) => {
    res.sendStatus(204);//no va a mostrar nada el navegador, si en herram de desarroll
  });
  

app.get("/miarchivo", (req, res) => {
  res.sendFile("./javascript.png", {
    // sin express tendría que haber importado 'fs'
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Emi",
    lastname: "Vela",
    Age: 43,
    points: [20, 30, 40],
    address: {
      city: "Parana",
      street: "Las Lengas 666",
    },
  });
});

app.listen(3000);
console.log(`Serve on port ${3000}`);
