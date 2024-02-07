const Animal = require("../models/animal");
const { response } = require("express");

const animalsGet = async (req, res = response) => {
  const { limite, desde } = req.query;
  const query = { estadoAdopcion: "Disponible" };

  const [total, animals] = await Promise.all([
    Animal.countDocuments(query),
    Animal.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.status(200).json({
    total,
    animals,
  });
};

const getAnimalById = async (req, res) => {
  const { id } = req.params;
  const animal = await Animal.findOne({ _id: id });

  res.status(200).json({
    animal,
  });
};

const putAnimals = async (req, res = response) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;

  const animal = await Animal.findByIdAndUpdate(id, resto);

  res.status(200).json({
    msg: "Animal Actualizado Exitosamente!!",
    animal,
  });
};

const animalsDelete = async (req, res) => {
  const { id } = req.params;
  const animal = await Animal.findByIdAndUpdate(
    id,
    { estadoAdopcion: "Adoptado" },
    { new: true }
  );

  res.status(200).json({
    msg: "Animal eliminado exitosamente!!",
    animal,
  });
};

const animalsPost = async (req, res) => {
  const {
    nombre,
    tipo,
    edad,
    genero,
    descripcion,
    vacunasYCuidados,
    requisitosAdopcion,
  } = req.body;

  const animal = new Animal({
    nombre,
    tipo,
    edad,
    genero,
    descripcion,
    vacunasYCuidados,
    requisitosAdopcion,
  });

  await animal.save();
  res.status(202).json({
    animal,
  });
};

module.exports = {
  animalsPost,
  putAnimals,
  getAnimalById,
  animalsGet,
  animalsDelete,
};
