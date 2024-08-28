/* const http = require('http')
const fs = require('fs')

const server = http.createServer( (req, res)=> {
const read = fs.createReadStream('./static/index.html')
read.pipe(res)
})

server.listen(3000)
console.log(`Serve on port ${3000}`) */

const express = require('express')

var app = express();
//Routing
app.get('/', (req, res)=> {
  /* res.sendFile('./static/index.html', {
    root: __dirname //pide especificamente la ruta. Comparar con el de arriba, es mas simple con express al ir agrandando el proyecto
  }); */
  res.send('Hello')
});

app.get('/about', (req, res)=> {// si visito una ruta inexistente nos da un error 404. El fremework da eso, sin framework da un error 200
 
    res.send('Acerca de')
  });
  
  app.get('/Weather', (req, res)=> {
 
    res.send('Nice')
  });

  app.use((req, res)=> {//res.send('No se encontró tu página') aca da el error 200 porque lo estamos manejando nosotros
 
    res.status(404).send('No se encontró tu página')
  });



app.listen(3000)
console.log(`Serve on port ${3000}`) 