const express = require('express')

const {getPagos,getEnfermeraId,getClienteforId,getTurnosIdPaciente,getPacientesUsuario,getClienteId,getNotasEnfermeras,getNotasClienteAndPaciente,getNotas,getPacientesHistoria,getClientes,getPacientesAndClientes,getPacientes,getEnfermeras,getTurnos, getEnfermeraUserAndId, getTurnosEnfermera}= require('../connection/getDataQuery')

const router = express.Router()



router.get('/clientes/:user',(req,res)=>{
    let user= req.params.user;
    const data = getClientes()
    data.then(clients => {
        res.render('clientes', { clients: clients ,user: user});
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('No se pudieron obtener los clientes.');
      });
    
    
})

router.get('/pagos/:user',(req,res)=>{
  let user= req.params.user;
  const data = getPagos()
  data.then(pagos => {
      res.render('pagos', { pagos: pagos ,user: user});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los pagos.');
    });
  
  
})

router.get('/Pacientes/:user',(req,res)=>{
  let user= req.params.user;
  const data = getPacientes()
  data.then(pacientes => {
      res.render('pacientes', { pacientes: pacientes ,user: user});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los pacientes.');
    });
  
  
})

router.get('/HistorialPacientes/:id/:user',(req,res)=>{
  let user= req.params.user;
  const data = getPacientesHistoria(req.params.id)
  data.then(pacientes => {
      res.render('pacienteHistoria', { paciente: pacientes ,user: user});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los pacientes.');
    });
  
  
})

router.get('/HistorialEnfermera/:id/:user',(req,res)=>{
  let user= req.params.user;
  const data = getPacientesHistoria(req.params.id)
  data.then(pacientes => {
      res.render('pacienteEnfermera', { paciente: pacientes ,user: user});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los pacientes.');
    });
  
  
})



router.get('/informacionPacientes/:id/:user',(req,res)=>{
  let user= req.params.user;
  const data = getPacientesHistoria(req.params.id)
  data.then(pacientes => {
      res.render('pacientes_Enfermeras', { paciente: pacientes ,user: user});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los pacientes.');
    });
  
  
})

router.get('/Enfermeras/:user',(req,res)=>{
  let user= req.params.user;
  const data = getEnfermeras()
  data.then(nurses => {
      res.render('enfermeras', { nurses: nurses ,user: user});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener las enfermeras.');
    });
  
  
})

router.get('/turnos/:user',(req,res)=>{
  let user= req.params.user;
  const data = getTurnos()
  data.then(turnos => {
      res.render('turnos', { turno: turnos ,user: user});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los turnos.');
    });
  
  
})


router.get('/Enfermeraturnos/:user',(req,res)=>{
  let user= req.params.user;
  const data = getEnfermeraUserAndId(user)
  
  data.then(turnos => {
    
    const t = getTurnosEnfermera(turnos._id)

    t.then(tur => {
      res.render('turnos_enfermeras', { turno: tur,user: user});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los turnos.');
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).send('No se pudieron obtener los turnos.');
  });
  
  
})


router.get('/paciente/:cc/:user',(req,res)=>{
  let user= req.params.user;
  const data = getPacientesAndClientes(req.params.cc)
  data.then(clients => {
      res.render('pacientesreelacionados', { clients: clients ,user: user});

    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los clientes.');
    });
})


router.get('/clientes/:cc/:user',(req,res)=>{
  let user= req.params.user;
  const data = getClienteforId(req.params.cc)
  data.then(clients => {
      res.render('clienteseditar', { clients: clients ,user: user});

    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los clientes.');
    });
})

router.get('/pacientes/:cc/:user',(req,res)=>{
  let user= req.params.user;
  const data = getEnfermeraId(req.params.cc)
  data.then(pacients => {
      res.render('pacientesEditar', { pacients: pacients ,user: user});

    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los pacientes.');
    });
})

router.get('/enfermeras/:cc/:user',(req,res)=>{
  let user= req.params.user;
  const data = getEnfermeraId(req.params.cc)
  data.then(ferm => {
      res.render('enfermerasEditar', { ferm: ferm ,user: user});

    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener las enfermeras.');
    });
})


router.get('/Notas/:user',(req,res)=>{
  let user= req.params.user;
  const data = getNotas()
  data.then(Notas => {
      res.render('notas', { notas: Notas ,user: user});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los Notas.');
    });
  
  
})

router.get('/ClienteNotas/:user',(req,res)=>{
  let user= req.params.user;
  const data = getClienteId(user)

  data.then(Notas => {
      const pac = getPacientesUsuario(Notas._id)
      pac.then(pac => {

        const note = getNotasClienteAndPaciente(pac._id)
        note.then(Notas => {
          res.render('notasCliente', { notas: Notas ,user: user});
        })
        .catch(err => {
          console.log(err);
          res.status(500).send('No se pudieron obtener los Notas.');
        });
      
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('No se pudieron obtener los Notas.');
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los Notas.');
    });
  
  
})


router.get('/ClienteTurnos/:user',(req,res)=>{
  let user= req.params.user;
  const data = getClienteId(user)

  data.then(Notas => {
    console.log(Notas)
      const pac = getPacientesUsuario(Notas._id)
      pac.then(pac => {
        console.log(pac)
        const note = getTurnosIdPaciente(pac._id)
        console.log(note)
        note.then(Notas => {
          res.render('turnosCliente', { turno: Notas ,user: user});
          console.log(Notas)
        })
        .catch(err => {
          console.log(err);
          res.status(500).send('No se pudieron obtener los Notas.');
        });
      
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('No se pudieron obtener los Notas.');
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los Notas.');
    });
  
  
})

router.get('/EnfermeraNotas/:user',(req,res)=>{
  let user= req.params.user;
  const data = getEnfermeraUserAndId(user)

  data.then(ferm => {
      const pac = getNotasEnfermeras(ferm._id)
      pac.then(pac => {

        res.render('notasEnfermera', { notas: pac ,user: user});
       
       
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('No se pudieron obtener los Notas.');
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los Notas.');
    });
  
  
})



module.exports = router