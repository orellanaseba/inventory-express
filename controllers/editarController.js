const db = require("../databases/queries")
const { body, validationResult } = require("express-validator")

const obtenerInformacionProducto = async (req, res) => {
    const { id } = req.params
    const productos = await db.busquedaProductoId(id)
    res.render("editarProducto", { productos }) 
}

const actualizarProducto = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).render("editarProducto", {
            errors: errors.array(),
        })
    }

    const { contraseña } = req.body

    if(contraseña === process.env.PASSWORD) {
        const { id_producto, titulo, descripcion, marca, precio, url_imagen, id_categoria, sub_categoria } = req.body
        await db.actualizarProducto(titulo, descripcion, marca, precio, url_imagen, id_categoria, sub_categoria, id_producto)
        res.redirect("/productos?success=true")
    }
    else {
        res.status(401).send("Contraseña incorrecta. <a href='/productos'>Volver</a>");
    }
}

module.exports = {
    obtenerInformacionProducto,
    actualizarProducto
}