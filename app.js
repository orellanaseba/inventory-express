const express = require("express")
const app = express()
const path = require("node:path")

const productosRouter = require("./routes/productosRouter")
const categoriasRouter = require("./routes/categoriasRouter")
const nuevoProductoRouter = require("./routes/nuevoProductoRouter")
const busquedaRouter = require("./routes/busquedaRouter")
const vistaProductoRouter = require("./routes/vistaProductoRouter")
const filtroRouter = require("./routes/filtroRouter")
const editarRouter = require("./routes/editarRouter")

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => res.render("index"));
app.use("/productos", productosRouter)
app.use("/categorias", categoriasRouter)
app.use("/nuevo-producto", nuevoProductoRouter)
app.use("/busqueda", busquedaRouter)
app.use("/vista-producto", vistaProductoRouter)
app.use("/filtrar", filtroRouter);
app.use("/editar", editarRouter)

const PORT = 3000
app.listen(PORT, () => console.log("http://localhost:" + PORT));