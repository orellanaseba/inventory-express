const { Router } = require("express")
const categoriasController = require("../controllers/categoriasController")
const categoriasRouter = Router()

categoriasRouter.get("/", categoriasController.mostrarCategorias);
categoriasRouter.get("/:categoria_id/productos", categoriasController.mostrarProductosByCategoria)

module.exports = categoriasRouter