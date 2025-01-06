const { Router } = require("express")
const busquedaRouter = Router()
const busquedaController = require("../controllers/busquedaController")

busquedaRouter.get("/", busquedaController.getNombreBySearch)

module.exports = busquedaRouter