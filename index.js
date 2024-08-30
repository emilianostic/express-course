
const express = require("express");
const app = express()

app.get('/search', (req, res)=>{
    console.log(req.query)
    if(req.query.q === 'javascript books'){//en la url coloco search?q=.... % es el espacio
res.send('lista de libros J')
    }
    else{
        res.send('pagina normal')
    }
    })
app.get('/hello/:username', (req, res)=>{
console.log(req.query)//esto se ve si coloco "?" en la url en el navegador. Se ve como un objeto

console.log(req.query.user)
console.log(req.query.age)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res)=>{
    const {x, y} = req.params
const result = parseInt(x) + parseInt(y)
    res.send(`Result ${result}`)
})

app.get('/users/:name/photo', (req, res)=>{//parametro desde la url
   if(req.params.name === "emi"){
    return res.sendFile('./Javascript.png', {
        root: __dirname
    })
   }
   res.send('usuario sin acceso')
    
})



app.listen(3000);
console.log(`Serve on port ${3000}`);
