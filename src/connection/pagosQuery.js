require('./conectiondb')
const nurseModels = require('../Model/Nurses')
const turnosModels = require('../Model/Turnos')



const pagosEnfermera = async (id_enfermera, fecha_inicial, fecha_fin) => {
  let varId = id_enfermera.toString();
  const totalAPagar = await turnosModels.aggregate([
    {
      $match: {
        id_enfermera: varId,
        fecha_inicio: {
          $gte: new Date(fecha_inicial),
          $lte: new Date(fecha_fin),
        },
        fecha_fin: {
          $gte: new Date(fecha_inicial),
          $lte: new Date(fecha_fin),
        },
      },
    },
    {
      $addFields: {
        dias: {
          $ceil: {
            $divide: [
              { $subtract: [{ $toDate: "$fecha_fin" }, { $toDate: "$fecha_inicio" }] },
              86400000,
            ],
          },
        },
      },
    },
    {
      $addFields: {
        total: { $multiply: ["$valor", "$dias"] }
      }
    },
    {
      $group: {
        _id: "$id_enfermera",
        total_a_pagar: { $sum: "$total" }
      }
    }
 ]);
     return totalAPagar
}


module.exports = {pagosEnfermera,}


