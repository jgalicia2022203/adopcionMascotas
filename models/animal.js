const { Schema, model } = require("mongoose");

const AnimalSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  tipo: {
    type: String,
    required: [true, "El tipo de animal es obligatorio"],
  },
  edad: {
    type: String,
    required: [true, "La edad es obligatoria"],
  },
  genero: {
    type: String,
    required: [true, "El género es obligatorio"],
  },
  descripcion: {
    type: String,
    required: [true, "La descripción es obligatoria"],
  },
  estadoAdopcion: {
    type: String,
    enum: ["Disponible", "Reservado", "Adoptado"],
    default: "Disponible",
  },
  vacunasYCuidados: {
    type: String,
  },
  requisitosAdopcion: {
    type: String,
  },
});

module.exports = model("Animal", AnimalSchema);
