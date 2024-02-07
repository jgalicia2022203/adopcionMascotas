const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar_campos");

const {
  animalsPost,
  putAnimals,
  animalsDelete,
  animalsGet,
  getAnimalById,
} = require("../controllers/animal.controller");

const { existeAnimalById } = require("../helpers/db-validator");

const router = Router();

router.get("/", animalsGet);

router.get(
  "/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existeAnimalById),
    validarCampos,
  ],
  getAnimalById
);

router.put(
  "/:id",
  [check("id", "No es un id valido").isMongoId(), validarCampos],
  putAnimals
);

router.post(
  "/",
  [
    check("nombre", "El nombre no debe ir vacío").not().isEmpty(),
    check("tipo", "El tipo no debe ir vacío").not().isEmpty(),
    check("edad", "La edad no debe ir vacía").not().isEmpty(),
    check("genero", "El género no debe ir vacío").not().isEmpty(),
    check("descripcion", "La descripción no debe ir vacía").not().isEmpty(),
    validarCampos,
  ],
  animalsPost
);

router.delete(
  "/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom(existeAnimalById),
    validarCampos,
  ],
  animalsDelete
);

module.exports = router;
