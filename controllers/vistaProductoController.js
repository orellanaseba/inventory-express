const db = require("../databases/queries")

const busquedaPorId = async (req, res) => {
    const { id } = req.params
    const productos = await db.busquedaProductoId(id)
    if(productos.length === 0) {
        return res.status(404).send("No se encontró el producto.");
    } 
    res.render("vistaProducto", { productos });
}

module.exports = {
    busquedaPorId
}