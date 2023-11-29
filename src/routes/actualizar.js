const express = require('express')
const {updateUser,updatePacient,updateFerm} = require('../connection/EditQuery')
const {enviarCorreo} = require('../SendEmails/EnvioCorreos')


const router = express.Router()




router.post('/ActualizarClientesTurnos/:id/:user', (req, res) => {
  const user = req.params.user;
  console.log(req.body); 
  updateUser(req.params.id, req.body)
    .then(updatedUser => {
      res.redirect(`/clientes/${user}`)
    })
    .catch(error => {

      res.status(500).json({ error: 'Error en la actualización' });
    });
});


router.post('/ActualizarPacientes/:id/:user', (req, res) => {
  const user = req.params.user;
  console.log(req.body); 
  updatePacient(req.params.id, req.body)
    .then(updated=> {
      res.redirect(`/Pacientes/${user}`)
    })
    .catch(error => {

      res.status(500).json({ error: 'Error en la actualización' });
    });
});

router.post('/ActualizarEnfermeras/:id/:user', (req, res) => {
  const user = req.params.user;
  console.log(req.body); 
  updateFerm(req.params.id, req.body)
    .then(updated=> {
      res.redirect(`/Enfermeras/${user}`)
    })
    .catch(error => {

      res.status(500).json({ error: 'Error en la actualización' });
    });
});






module.exports = router