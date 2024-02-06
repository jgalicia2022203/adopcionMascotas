const { Schema, model } = require("mongoose");

const AnimalSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },

  especie: {
    type: String,
    required: [true, "La especie es obligatoria"],
  },

  raza: {
    type: String,
    required: [true, "La raza es obligatoria"],
  },

  edad: {
    type: String,
    required: [true, "La edad es obligatoria"],
  },

  sexo: {
    type: String,
    required: [true, "El sexo es obligatorio"],
  },
  peso: {
    type: String,
    required: [true, "El peso es obligatorio"],
  },
  propietario: {
    type: String,
    required: [true, "El nombre del propietario es obligatorio"],
  },
  contactoPropietario: {
    type: String,
    required: [true, "El contacto del propietario es obligatorio"],
  },
});

module.exports = model("Animal", AnimalSchema);
