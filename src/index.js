const express = require("express");
const morgan = require('morgan')
const path = require('path')
require('ejs')

const app = express();

const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users')

//settings
app.set('case sensitive routing', true) //para Case sensitive
app.set('appName', 'Express Course')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , 'views'))
app.use(express.json())
//middleware, MORGAN
app.use(morgan('dev'));//muestra mensaje por consola

app.use(HomeRoutes)
app.use(UserRoutes)


app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/public', express.static(path.join(__dirname, 'public')))//se puede acceder a todo lo que está dentro de la carpeta public. Con el primer public obligo a poner el slash por si un archivo se llama igual que una ruta. Va al final delas rutas. Ej nota.txt


app.listen(`${app.get('port')}`);
console.log(`Serve ${app.get('appName')} on port ${app.get('port')}`);
