const express = require('express');
const {existUser , existNurse, existAdmin} = require('../connection/LoginQuery')

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login')

})

router.get('/loginEnfermeras', (req, res) => {
    res.render('loginEnfermeras')

})

router.get('/adminlog', (req, res) => {
    res.render('loginAdmin')

})

router.post('/procesar', (req, res) => {
    const user = req.body.usuario
    const password = req.body.password
    console.log(user+""+password)
    existUser(user, password).then((result) => {
        if(result === true) {
            console.log("Datos enviado con éxito = "+user+""+password)
            res.redirect(`/profileCliente/${user}`)
        }else{
            res.send('Error User no Existe')
            }    
    });
})  

router.post('/procesarEnfermeras', (req, res) => {
    const user = req.body.usuario
    const password = req.body.password
    console.log(user+""+password)
    existNurse(user, password).then((result) => {
        if(result === true) {
            console.log("Datos enviado con éxito = "+user+""+password)
            res.redirect(`/profileEnfermeras/${user}`)
        }else{
            res.send('Error User no Existe')
            }    
    });
}) 

router.post('/admin', (req, res) => {
    const user = req.body.usuario
    const password = req.body.password
    console.log(user+""+password)
    existAdmin(user, password).then((result) => {
        if(result === true) {
            console.log("Datos enviado con éxito = "+user+""+password)
            res.redirect(`/profile/${user}`)
        }else{
            res.send('Error User no Existe')
            }    
    });
}) 

module.exports = router
