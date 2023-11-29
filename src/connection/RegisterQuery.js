require('./conectiondb')
const userModels = require('../Model/Users')
const paciModels = require('../Model/pacientes')
const nurseModels = require('../Model/Nurses')
const turnosModels = require('../Model/Turnos')
const NotasModels = require('../Model/Notas')
const pagosModels = require('../Model/pago')

const registrarPagos =  (cod,Nombre,fecha_inicial,fecha_fin,valor_total) => {
    const createPago =  new pagosModels({"cod": cod,"Nombre":Nombre,"fecha_inicial":fecha_inicial,"fecha_fin":fecha_fin,"valor_total":valor_total })
    return createPago.save();
}

const registrarUser =  (data) => {
    const createUser =  new userModels(data)
    return createUser.save();
}

const registrarEnfermera =  (data) => {
    const createNurse =  new nurseModels(data)
    return createNurse.save();
}

const registrarPacientes =  (data) => {
    const createPaci =  new paciModels(data)
    return createPaci.save();
}

const registrarTurnos =  (data) => {
    const createTurn =  new turnosModels(data)
    return createTurn.save();
}

const registrarNotas =  (data) => {
    const createNota =  NotasModels(data)
    return createNota.save();
}






module.exports = { registrarUser, registrarEnfermera, registrarPacientes, registrarTurnos, registrarNotas,registrarPagos}
