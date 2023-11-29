const {Schema , model}  =  require('mongoose')

const pagosSchema = new Schema({
    cod: String,
    Nombre: String,
    fecha_inicial: String,
    fecha_fin: String,
    valor_total: Number
})

const pagos = model('pagos',pagosSchema)


module.exports = pagos