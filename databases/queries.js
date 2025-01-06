const pool =  require("./pool.js");

const getTodosProductos = async () => {
    const { rows } = await pool.query("SELECT * FROM producto ORDER BY id_producto ASC")
    return rows
}

const getTodasCategorias = async () => {
    const { rows } = await pool.query("SELECT * FROM categoria")
    return rows;
}

const getCategoriaByName = async (categoria_id) => {
    const { rows } = await pool.query("SELECT * FROM producto WHERE id_categoria = $1", [categoria_id]);
    return rows;
}

const insertNuevoProducto = async (titulo, descripcion, marca, precio, url_imagen, id_categoria, sub_categoria) => {
    const { rows } = await pool.query("INSERT INTO producto (titulo, descripcion, marca, precio, url_imagen, id_categoria, sub_categoria) VALUES ($1, $2, $3, $4, $5, $6, $7)", [titulo, descripcion, marca, precio, url_imagen, id_categoria, sub_categoria])
    return rows;
}

const busquedaProducto = async (q) => {
    const { rows } = await pool.query("SELECT * FROM producto WHERE titulo ILIKE $1 OR marca ILIKE $2 OR sub_categoria ILIKE $3", [`%${q}%`, `%${q}%`, `%${q}%`])
    return rows
}

const busquedaProductoId = async (id) => {
    const { rows } = await pool.query("SELECT * FROM producto WHERE id_producto = $1", [id])
    return rows;
}

const cambiarCategoria = async (categoria) => {
    const { rows } = await pool.query("SELECT * FROM producto WHERE sub_categoria = $1", [categoria])
    return rows;
}

const eliminarProductoId = async (id) => {
    await pool.query("DELETE FROM producto WHERE id_producto = $1", [id])
}

const actualizarProducto = async (titulo, descripcion, marca, precio, url_imagen, id_categoria, sub_categoria, id_producto) => {
    await pool.query("UPDATE producto SET titulo = $1, descripcion = $2, marca = $3, precio = $4, url_imagen = $5, id_categoria = $6, sub_categoria = $7 WHERE id_producto = $8", [titulo, descripcion, marca, precio, url_imagen, id_categoria, sub_categoria, id_producto])
}

module.exports = {
    getTodosProductos,
    getTodasCategorias,
    getCategoriaByName,
    insertNuevoProducto,
    busquedaProducto,
    busquedaProductoId,
    cambiarCategoria,
    eliminarProductoId,
    actualizarProducto
}