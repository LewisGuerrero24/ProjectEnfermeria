const express = require('express');
const {deleteClientes,deleteEnfermeras, deletePacientes, deleteTurnos} = require('../connection/deleteQuery')

const router = express.Router();


router.get('/deleteusers/:id/:user', (req, res) => {
    console.log(req.params.id)
    deleteClientes(req.params.id).then((result) => {
        if(result === true) {
            res.redirect(`/clientes/${req.params.user}`)
            
        }else{
            res.send('Error User no Existe')
            }    
    });
}) 

router.get('/deletepacientes/:id/:user', (req, res) => {
    console.log(req.params.id)
    deletePacientes(req.params.id).then((result) => {
        if(result === true) {
            res.redirect(`/Pacientes/${req.params.user}`)
            
        }else{
            res.send('Error Paciente no Existe')
            }    
    });
}) 

router.get('/deleteenfermeras/:id/:user', (req, res) => {
    console.log(req.params.id)
    deleteEnfermeras(req.params.id).then((result) => {
        if(result === true) {
            res.redirect(`/Enfermeras/${req.params.user}`)
            
        }else{
            res.send('Error Enfermera no Existe')
            }    
    });
}) 

router.get('/deleteturnos/:id/:user', (req, res) => {
    console.log(req.params.id)
    deleteTurnos(req.params.id).then((result) => {
        if(result === true) {
            res.redirect(`/turnos/${req.params.user}`)
            
        }else{
            res.send('Error turno no Existe')
            }    
    });
}) 


module.exports = router
