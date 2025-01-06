const { Router } = require("express")
const productosRouter = Router();
const productosController = require("../controllers/productosController")

productosRouter.get("/", productosController.mostrarProductos)
productosRouter.post("/:id", productosController.eliminarProducto);


module.exports = productosRouter