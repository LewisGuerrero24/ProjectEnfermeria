const express = require('express')
const {createPDF}= require('../documents/pdf')
const {getClientes, getPacientes, getEnfermeras,getNotas,getTurnos}= require('../connection/getDataQuery')

const router = express.Router()


router.get('/generarpdf/users', (req, res) => {
  const data = getClientes();
 
  data.then(clients => {
     res.render('pdfclientes', { clients: clients }, (err, html) => {
       if (err) {
         console.log(err);
         res.status(500).send('Server Error');
       } else {
         createPDF(html).then(pdfBuffer => {
           res.type('application/pdf');
           res.send(pdfBuffer);
         });
       }
     });
  })
  .catch(err => {
     console.log(err);
     res.status(500).send('No se pudieron obtener los clientes.');
  });
 });

 router.get('/generarpdf/pacientes', (req, res) => {
  const data = getPacientes();
 
  data.then(pacientes => {
     res.render('pdfpacientes', { pacientes: pacientes }, (err, html) => {
       if (err) {
         console.log(err);
         res.status(500).send('Server Error');
       } else {
         createPDF(html).then(pdfBuffer => {
           res.type('application/pdf');
           res.send(pdfBuffer);
         });
       }
     });
  })
  .catch(err => {
     console.log(err);
     res.status(500).send('No se pudieron obtener los clientes.');
  });
 });

 router.get('/generarpdf/enfermeras', (req, res) => {
  const data = getEnfermeras();
 
  data.then(nurse => {
     res.render('pdfenfermeras', { nurses: nurse }, (err, html) => {
       if (err) {
         console.log(err);
         res.status(500).send('Server Error');
       } else {
         createPDF(html).then(pdfBuffer => {
           res.type('application/pdf');
           res.send(pdfBuffer);
         });
       }
     });
  })
  .catch(err => {
     console.log(err);
     res.status(500).send('No se pudieron obtener los clientes.');
  });
 });

 router.get('/generarpdf/notas', (req, res) => {
  const data = getNotas();
 
  data.then(nota => {
     res.render('pdfNotas', { notas: nota }, (err, html) => {
       if (err) {
         console.log(err);
         res.status(500).send('Server Error');
       } else {
         createPDF(html).then(pdfBuffer => {
           res.type('application/pdf');
           res.send(pdfBuffer);
         });
       }
     });
  })
  .catch(err => {
     console.log(err);
     res.status(500).send('No se pudieron obtener los clientes.');
  });
 });

 router.get('/generarpdf/Turnos', (req, res) => {
  const data = getTurnos();
 
  data.then(turno => {
     res.render('pdfturnos', { turno: turno }, (err, html) => {
       if (err) {
         console.log(err);
         res.status(500).send('Server Error');
       } else {
         createPDF(html).then(pdfBuffer => {
           res.type('application/pdf');
           res.send(pdfBuffer);
         });
       }
     });
  })
  .catch(err => {
     console.log(err);
     res.status(500).send('No se pudieron obtener los clientes.');
  });
 });



module.exports = router