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
    contacto_emergencia:String,
    Seguro: String,
    historial: { 
        afeccion:String,
        Cirugias_pasadas:String,
        Alergias:String,
        Medicamentos_actuales: String
    },
   Fecha_registro: String,
   consentimiento: String,
   cliente_id: String
})
const pac = model('Pacientes',userSchema)


module.exports = pac