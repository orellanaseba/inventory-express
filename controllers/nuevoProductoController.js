const db = require("../databases/queries")
const { body, validationResult } = require("express-validator")

const validateNuevoProducto = [
    body("titulo").trim()
        .isLength({ min: 10, max: 40 })
        .withMessage("El título debe tener entre 10 y 40 caracteres."),
    body("descripcion")
        .trim()
        .notEmpty()
        .isLength({ min: 20, max: 255 })
        .withMessage("La descripción es obligatoria y debe contener entre 50 y 255 caracteres."),
    body("marca")
        .trim()
        .notEmpty()
        .withMessage("La marca es obligatoria."),
    body("precio")
        .isFloat({ min: 0, max: 999999 })
        .withMessage("El precio debe ser un número positivo y no mayor a '999.999'."),
    body("url_imagen")
        .trim()
        .isURL({ protocols: ["http", "https"], require_protocol: true })
        .withMessage("La URL de la imágen no es válida."),
]

const postNuevoProducto = async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).render("nuevoProducto", { errors: errors.array() })
        }
        const { titulo, descripcion, marca, precio, url_imagen, id_categoria, sub_categoria } = req.body
        await db.insertNuevoProducto(titulo, descripcion, marca, precio, url_imagen, id_categoria, sub_categoria )
        res.redirect("/nuevo-producto?success=true");
}

const mostrarModal = (req, res) => {
    const success = req.query.success === "true";
    res.render("nuevoProducto", { success })
}

module.exports = {
    postNuevoProducto,
    validateNuevoProducto,
    mostrarModal,
}