
const express = require("express");
const app = express()
app.get('/hello/:username', (req, res)=>{//parametro desde la url

    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res)=>{//parametro desde la url
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
