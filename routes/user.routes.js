const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar_campos");

const {
  usuariosPost,
  putUsuarios,
  usuariosDelete,
  usuariosGet,
  getUsuarioById,
} = require("../controllers/user.controller");
const {
  existenteEmail,
  esRoleValido,
  existeUsuarioById,
} = require("../helpers/db-validator");

const router = Router();

router.get("/", usuariosGet);

router.get(
  "/:id",
  [
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(existeUsuarioById),
    validarCampos,
  ],
  getUsuarioById
);

router.put(
  "/:id",
  [
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(existeUsuarioById),
    check("role").custom(esRoleValido),
    validarCampos,
  ],
  putUsuarios
);

router.post(
  "/",
  [
    check("nombre", "El nombre no debe ir vació").not().isEmpty(),
    check("password", "El password debe ser mayor a 6 caracteres").isLength({
      min: 6,
    }),
    check("correo", "Correo invalido").isEmail(),
    check("correo").custom(existenteEmail),
    check("role").custom(esRoleValido),
    validarCampos,
  ],
  usuariosPost
);

router.delete(
  "/:id",
  [
    check("id", "No es un id válido").isMongoId(),
    check("id").custom(existeUsuarioById),
    validarCampos,
  ],
  usuariosDelete
);

module.exports = router;
