const db = require("../databases/queries")

const categoriaSeleccionada = async (req, res) => {
    const { categoria } = req.query
    const productos = await db.cambiarCategoria(categoria)
    res.render("filtroVista", { productos })
}

module.exports = {
    categoriaSeleccionada
}