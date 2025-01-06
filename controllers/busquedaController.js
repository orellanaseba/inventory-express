const db = require("../databases/queries")

const getNombreBySearch = async (req, res) => {
    const { q } = req.query
    const productos = await db.busquedaProducto(q);
    if(productos.length === 0) {
        res.send("No se encontraron coincidencias. <a href='/'>Volver</a>")
    }
    else {
        res.render("busqueda", { productos })
    }
}

module.exports = {
    getNombreBySearch
}