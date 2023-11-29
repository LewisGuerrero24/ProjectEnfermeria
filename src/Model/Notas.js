const {Schema , model}  =  require('mongoose')

const noteSchema = new Schema({
    id_paciente: String,
    fecha: String,
    descripcion: String,
    id_Enfermera: String,
    asistencia: String
})

const Notas = model('Notas',noteSchema)


module.exports = Notas