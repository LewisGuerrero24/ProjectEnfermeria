const {Schema , model}  =  require('mongoose')

const turnoSchema = new Schema({
    fecha_inicio: Date,
    fecha_fin: Date,
    id_paciente: String,
    id_enfermera:String,
    jornada: String,
    valor: Number
})

const turno = model('turnos',turnoSchema)


module.exports = turno