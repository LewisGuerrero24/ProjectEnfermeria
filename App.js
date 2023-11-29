const express = require('express')
const ejs = require('ejs')
const app = express()
const bodyParser =  require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Rutas
const loginRoutes = require('./src/routes/login')
const navRoutes = require('./src/routes/nav')
const profileRoutes = require('./src/routes/profile')
const RegisterRoutes = require('./src/routes/Registrar')
const deleteRoutes =require('./src/routes/delete')
const listRoutes = require('./src/routes/list')
const pdfRoutes = require('./src/routes/pdfroute')
const UpdateRoutes = require('./src/routes/actualizar')
const pagosRoutes = require('./src/routes/pagos')
const path = require('path')
app.set('port',8133)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))
app.use('/src',express.static(path.join(__dirname,'src/views/templates')))
const pdf = require('html-pdf');




app.get('/', (req, res) => {
    res.render('index')
} )

app.use(loginRoutes)
app.use(navRoutes)
app.use(profileRoutes)
app.use(RegisterRoutes)
app.use(deleteRoutes)
app.use(listRoutes)
app.use(pdfRoutes)
app.use(UpdateRoutes)
app.use(pagosRoutes)

app.listen(app.get('port'))
console.log(`Server Conectado en el Puerto = ${app.get('port')}`)