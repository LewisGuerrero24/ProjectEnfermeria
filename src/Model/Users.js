const {Schema , model}  =  require('mongoose')

const userSchema = new Schema({
    cc: Number,
    name: String,
    lastname: String,
    fecha_nacimiento:String,
    email: String,
    genero: String,
    telefono:Number,
    direccion:String,
    age: String,
    relacion_paciente: String,
    user: String,
    password: String,
    consentimiento: String
})

const user = model('Users',userSchema)


module.exports = user