
const express = require("express");
//el request no es solo un título. Es un doc: título (url por ej), contenido(json por ejem), cabeceras (info del contenido). Partes: /about 'endpoint', {img, text, etc } "body" y "header" nota adicional que describ y va el código de estado. Es importante en express

const app = express();
app.use(express.urlencoded({extended: false})) //para formularios
app.use(express.json())
//app.use(express.text()) con esto puede procesar el texto
app.post('/user', (req, res)=>{
    console.log(req.body)
    res.send('usario creado')
})


app.listen(3000);
console.log(`Serve on port ${3000}`);
