const {Schema , model}  =  require('mongoose')

const nurseSchema = new Schema({
    name: String,
    lastname: String,
    age: String,
    user: String,
    password: String,
    fechaNacimiento: String,
    genero: String,
    direccion: String,
    telefono: String,
    correoElectronico: String,
    fechaContratacion: String,
    especialidad: String,
    licencia: String,
    horario: String,
    cc: String,
    vencimientoLicencia: String,
    estadoCivil: String,
    Numeroemergencia: String
});


const nurse = model('Enfermeras',nurseSchema)


module.exports = nurse