const express = require('express')
const {registrarUser, registrarEnfermera, registrarPacientes, registrarTurnos,registrarNotas} = require('../connection/RegisterQuery')
const {enviarCorreo,} = require('../SendEmails/EnvioCorreos')
const {getClientes,getPacientes,getEnfermeras,getEnfermeraUserAndId}= require('../connection/getDataQuery')

const router = express.Router()

router.get('/registrousers/:user', (req, res) => {
        const user = req.params.user
        
        res.render('RegistroUsuarios',{user: user})
})

router.get('/registroEnfermeras/:user', (req, res) => {
  const user = req.params.user
  res.render('RegistroEnfermeras',{user: user})
})

router.get('/registroPacientes/:user', (req, res) => {
  const user = req.params.user
  const data = getClientes()
    data.then(clients => {
      res.render('RegistroPacientes',{clients: clients,user: user})
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('No se pudieron obtener los clientes.');
      });
})

router.get('/registroTurnos/:user', (req, res) => {
  const user = req.params.user
  const data = getPacientes()
  const enferm = getEnfermeras()

  data.then(pac => {
    enferm.then(ferm => {
      res.render('RegistroTurno',{enfermera : ferm,paciente : pac,user: user})
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('No se pudieron obtener los enfermera.');
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los clientes.');
    });
})

router.get('/registroNotas/:id/:user', (req, res) => {
  const user = req.params.user
  const id = req.params.id
  const enferm = getEnfermeraUserAndId(user)
    enferm.then(ferm => {
      res.render('RegistroNotas',{enfermera : ferm,id : id,user: user})
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('No se pudieron obtener los enfermera.');
      });

})



router.post('/regUsers/:user', async (req, res) => {
  console.log(req.body);

  registrarUser(req.body).then((user) => {
      enviarCorreo(user.email, user.user, user.password).then(() => {
        res.redirect(`/clientes/${req.params.user}`)
      }).catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Failed to send email after registration' });
      });
  }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to register user' });
  });
});

router.post('/regNotas/:user', async (req, res) => {
  console.log(req.body);
  registrarNotas(req.body).then((nota) => {
    
    if(nota){
        res.redirect(`/Enfermeraturnos/${req.params.user}`)
    }
      
  }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to register Note' });
  });


});




router.post('/regEnfer/:user', async (req, res) => {
  console.log(req.body);

  registrarEnfermera(req.body).then((user) => {
      enviarCorreo(user.correoElectronico, user.user, user.password).then(() => {
        res.redirect(`/Enfermeras/${req.params.user}`)
      }).catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Failed to send email after registration' });
      });
  }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to register user' });
  });
});


router.post('/regPac/:user', async (req, res) => {
  console.log(req.body);

  registrarPacientes(req.body).then((user) => {
    
    if(user){
        res.redirect(`/Pacientes/${req.params.user}`)
    }
      
  }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to register user' });
  });

});

router.post('/regTu/:user', async (req, res) => {
  console.log(req.body);

  registrarTurnos(req.body).then((user) => {
    
    if(user){
        res.redirect(`/turnos/${req.params.user}`)
    }
      
  }).catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Failed to register user' });
  });

});





module.exports = router