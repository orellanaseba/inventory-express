const { Router } = require("express")
const vistaProductoRouter = Router()
const vistaProductoController = require("../controllers/vistaProductoController")

vistaProductoRouter.get("/:id", vistaProductoController.busquedaPorId);

module.exports = vistaProductoRouter