import express from 'express';
import Producto from "../../models/Producto.js";
//import { productos } from '../../data/productos.js';
// Al importar la variable es de solo lectura. No se puede exportar una variable let, ha de ser const.
//let productos = [];

const productRouter = express.Router();


// POST /productos → Crear producto
productRouter.post("/", async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);

    res.status(201).json({
      message: "Producto añadido con éxito",
      data: nuevoProducto
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear producto",
      error
    });
  }
});

// GET /productos → Obtener todos
productRouter.get("/", async (req, res) => {
  const productos = await Producto.find();

  res.json({
    message: "Lista de productos",
    data: productos
  });
});

// GET /productos/:id → Obtener uno por ID
productRouter.get("/:productoId", async (req, res) => {
  const producto = await Producto.findById(req.params.productoId);

  if (!producto) {
    return res.status(404).json({
      message: `Producto con id ${req.params.productoId} no encontrado`
    });
  }

  res.json({
    message: "Producto encontrado",
    data: producto
  });
});

// DELETE /productos/:id → Borrar uno por ID
productRouter.delete("/:productoId", async (req, res) => {
  const eliminado = await Producto.findByIdAndDelete(req.params.productoId);

  if (!eliminado) {
    return res.status(404).json({
      message: `Producto con id ${req.params.productoId} no encontrado`
    });
  }

  res.json({
    message: "Producto eliminado",
    data: eliminado
  });
});

export default productRouter;
