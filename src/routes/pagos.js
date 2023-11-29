const express = require('express')
const {pagosEnfermera} = require('../connection/pagosQuery')
const {getEnfermeras,getEnfermeraId} = require('../connection/getDataQuery')
const {registrarPagos} = require('../connection/RegisterQuery')


const router = express.Router()


router.get('/formulariopago/:user',(req,res)=>{
  let user= req.params.user;
  const data = getEnfermeras()
  data.then(ferm => {
    res.render('formularioPagos',{enfermera: ferm,user: user})
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudieron obtener los clientes.');
    });
})



router.post('/consultabd/:user', (req, res) => {
  console.log(req.body)
  const data = getEnfermeraId(req.body.id_enfermera);
  data.then(ferm => {
   const total = pagosEnfermera(ferm._id,req.body.fecha_inicial,req.body.fecha_fin);
   total.then(totalpagar => {
    const datos = registrarPagos(ferm._id,ferm.name+" "+ferm.lastname,req.body.fecha_inicial,req.body.fecha_fin,totalpagar[0].total_a_pagar)
    datos.then(pago => {
        res.redirect(`/pagos/${req.params.user}`)
      })
      .catch(err => {
        console.log(err);
        res.status(500).send('No se pudieron obtener los clientes.');
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('No se pudo obtener el totala pagar.');
    });

  })
  .catch(err => {
    console.log(err);
    res.status(500).send('No se pudieron obtener las enfermeras.');
  });

  
});







module.exports = router