require('./conectiondb')
const userModels = require('../Model/Users')
const pacientModels = require('../Model/pacientes')
const fermModels = require('../Model/Nurses')
 

const updateUser =  async(id,datos) => {
    const us =  await userModels.findByIdAndUpdate(id,datos,{
        new: true,
        runValidators: true
    })
 return us;
}

const updatePacient =  async(id,datos) => {
    const us =  await pacientModels.findByIdAndUpdate(id,datos,{
        new: true,
        runValidators: true
    })
 return us;
}

const updateFerm=  async(id,datos) => {
    const us =  await fermModels.findByIdAndUpdate(id,datos,{
        new: true,
        runValidators: true
    })
 return us;
}



module.exports = {updateUser,updatePacient,updateFerm}