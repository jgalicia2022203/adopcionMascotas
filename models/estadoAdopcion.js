const { Schema, model } = require("mongoose");

const EstadoAdopcionSchema = {
  estadoAdopcion: {
    type: String,
    required: [true, "El estado es obligatorio"],
  },
};

module.exports = model("EstadoAdopcion", EstadoAdopcionSchema);
