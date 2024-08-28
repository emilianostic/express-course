//HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, and DELETE. These correspond to create, read, update, and delete (or CRUD)
const express = require('express')
//thunderClient: Client REST para no tener que crear frontend y poder hacer las peticiones
var app = express();

app.get('/products', (req, res)=>{

    //query a database (consultar DB)
    //process data
    //validate data


    res.send('lista de productos')
})
app.post('/products', (req, res)=>{
    res.send('creando productos')
})

app.put('/products', (req, res)=>{
    res.send('actualizando un producto')
})

app.delete('/products', (req, res)=>{
    res.send('eliminando un producto')
})

app.patch('/products', (req, res)=>{
    res.send('actualizando una parte del producto')
})


app.listen(3000)
console.log(`Serve on port ${3000}`) 