require('./conectiondb')
const userModels = require('../Model/Users')
const paciModels = require('../Model/pacientes')
const nurseModels = require('../Model/Nurses')
const turnosModels = require('../Model/Turnos')
const notasModels = require('../Model/Notas')
const pagosModels = require('../Model/pago')



const getPagos = () => {
    const res  = pagosModels.find()
    return res
}


const getClientes = () => {
    const res  = userModels.find()
    return res
}

const getClienteforId = (id) => {
    const res  = userModels.findOne({"_id": id})
    return res
}

const getClienteId = (user) => {
    const res  = userModels.findOne({"user": user})
    return res
}

const getPacientes = () => {
    const res  = paciModels.find()
    return res
}

const getPacientesHistoria = (id) => {
    const res  = paciModels.findOne({ '_id': id})
    return res

}

const getPacientesUsuario = (id) => {
    const res  = paciModels.findOne({ 'cliente_id': id})
    return res

}

const getEnfermeras = () => {
    const res  = nurseModels.find()
    return res
}

const getEnfermeraUserAndId = (user) => {
    const res  = nurseModels.findOne({'user': user})
    return res
}

const getEnfermeraId = (user) => {
    const res  = nurseModels.findOne({'_id': user})
    return res
}


const getTurnos = () => {
    const res  = turnosModels.find()
    return res
}

const getTurnosIdPaciente = (id_paciente) => {
    const res  = turnosModels.find({"id_paciente":id_paciente})
    return res
}

const getNotas = () => {
    const res  = notasModels.find()
    return res
}


const getNotasEnfermeras = (id_enfermera) => {
    const res  = notasModels.find({"id_enfermera": id_enfermera})
    return res
}

const getNotasClienteAndPaciente = (id_paciente) => {
    const res  = notasModels.find({"id_paciente": id_paciente })
    return res
}

const getTurnosEnfermera = (id) => {
    const res  = turnosModels.find({'id_enfermera' : id})
    return res
}

const getPacientesAndClientes = (cc) => {
    const res  = paciModels.findOne({ 'cliente_id': cc})
    return res

}

module.exports = { 
    getClientes,
    getPacientes,
    getEnfermeras,
    getTurnos ,
    getPacientesAndClientes,
    getPacientesHistoria,
    getEnfermeraUserAndId,
    getTurnosEnfermera,
    getNotas,
    getNotasEnfermeras,
    getNotasClienteAndPaciente,
    getClienteId,
    getPacientesUsuario,
    getTurnosIdPaciente,
    getClienteforId,
    getEnfermeraId,
    getPagos
}