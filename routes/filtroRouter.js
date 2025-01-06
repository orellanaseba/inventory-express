const { Router } = require("express");
const filtroRouter = Router();
const filtroController = require("../controllers/filtroController")

filtroRouter.get("/", filtroController.categoriaSeleccionada);

module.exports = filtroRouter