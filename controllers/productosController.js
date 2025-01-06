const db = require("../databases/queries")

const mostrarProductos = async (req, res) => {
    const productos = await db.getTodosProductos()

    res.render("productos", { productos, titulo_pagina: "Productos"})
}

const eliminarProducto = async (req, res) => {
    const { id } = req.params
    const { data } = req.body

    if(data === process.env.PASSWORD) {
        await db.eliminarProductoId(id)
        res.redirect("/productos?success=true")
        console.log("Producto eliminado correctamente.");
    }
    else {
        res.status(401).send("Contraseña incorrecta. <a href='/productos'>Volver</a>")
    }

}

module.exports = {
    mostrarProductos,
    eliminarProducto,

}