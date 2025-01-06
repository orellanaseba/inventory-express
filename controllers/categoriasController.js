const db = require("../databases/queries")

const mostrarCategorias = async (req, res) => {
    const categorias = await db.getTodasCategorias();
    res.render("categorias", { categorias })
}

const mostrarProductosByCategoria = async (req, res) => {
    const { categoria_id } = req.params
    const productos = await db.getCategoriaByName(categoria_id)
    if(categoria_id == 1) {
        res.render("productos", { productos, titulo_pagina: "Electrónica y smartphones" })
    }
    else if(categoria_id == 2) {
        res.render("productos", { productos, titulo_pagina: "Vestimenta" })
    }
}

module.exports = {
    mostrarCategorias,
    mostrarProductosByCategoria
}