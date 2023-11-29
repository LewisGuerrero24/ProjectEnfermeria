require('./conectiondb')
const userModels = require('../Model/Users')
const paciModels = require('../Model/pacientes')
const nurseModels = require('../Model/Nurses')
const turnosModels = require('../Model/Turnos')


const deleteClientes = async(id) => {
    const us  = await userModels.deleteOne({'_id':id})
    if(us){
        return true
    } else {
        return false
    }
}

const deleteEnfermeras = async(id) => {
    const us  = await nurseModels.deleteOne({'_id':id})
    if(us){
        return true
    } else {
        return false
    }
}

const deletePacientes = async(id) => {
    const us  = await paciModels.deleteOne({'_id':id})
    if(us){
        return true
    } else {
        return false
    }
}

const deleteTurnos= async(id) => {
    const us  = await turnosModels.deleteOne({'_id':id})
    if(us){
        return true
    } else {
        return false
    }
}

module.exports = { deleteClientes,deleteEnfermeras, deletePacientes, deleteTurnos}