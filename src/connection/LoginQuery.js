require('./conectiondb')
const userModels = require('../Model/Users')
const nurseModels = require('../Model/Nurses')
const adminModels = require('../Model/Admin')

const existUser =  async(user,password) => {
    const us =  await userModels.find({user:user, password: password}).exec()
    if(us[0]){
        return true
    } else {
        return false
    }
}

const existNurse =  async(user,password) => {
    const us =  await nurseModels.find({user:user, password: password}).exec()
    if(us[0]){
        return true
    } else {
        return false
    }
}

const existAdmin =  async(user,password) => {
    const us =  await adminModels.find({user:user, password: password}).exec()
    if(us[0]){
        return true
    } else {
        return false
    }
}


module.exports = {existUser, existNurse, existAdmin}