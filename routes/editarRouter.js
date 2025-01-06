const { Router } = require("express");
const editarRouter = Router();
const validation = require("../controllers/nuevoProductoController")
const editarController = require("../controllers/editarController");

editarRouter.get("/:id", editarController.obtenerInformacionProducto)
editarRouter.post("/", validation.validateNuevoProducto, editarController.actualizarProducto)

module.exports = editarRouter