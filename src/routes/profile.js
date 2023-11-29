const express = require('express');

const router = express.Router();

router.get('/profile/:user',(req, res) =>{
    res.redirect(`/clientes/${req.params.user}`)

});

router.get('/profileEnfermeras/:user',(req, res) =>{
    res.redirect(`/Enfermeraturnos/${req.params.user}`)

});

router.get('/profileCliente/:user',(req, res) =>{
    res.redirect(`/ClienteNotas/${req.params.user}`)

});



module.exports = router