const { Router } = require("express")
const nuevoProductoRouter = Router();
const nuevoProductoController = require("../controllers/nuevoProductoController")


nuevoProductoRouter.get("/", nuevoProductoController.mostrarModal);
nuevoProductoRouter.post("/", nuevoProductoController.validateNuevoProducto, nuevoProductoController.postNuevoProducto)

module.exports = nuevoProductoRouter