const {Schema , model}  =  require('mongoose')

const userSchema = new Schema({
    user: String,
    password: String
})

const admin = model('Admins',userSchema)


module.exports = admin