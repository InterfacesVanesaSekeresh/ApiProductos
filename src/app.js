import {} from "dotenv/config";
import express from "express";
import cors from "cors"; // Asegúrate de importar cors
import bodyParser from "body-parser";
import productosRoutes from "./routes/productos.js";

import { productos as productosMock } from "./data/productos.js";
import Producto from "./models/Producto.js";

const app = express();
//const PORT = 3000;
const PORT = process.env.PORT || 3000;
//console.log(process.env);

// Habilitando CORS para todas las solicitudes
// cualquier dominio podrá acceder a los recursos
// app.use(cors());
app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  }),
);

//-- Middlewares
// app.use(express.json()); // Permite trabajar con JSON en las solicitudes
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true })); // Soporta datos codificados en URL
// problema limitación url -- imágenes
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
//--

app.use("/productos", productosRoutes);

// Ruta básica
app.get("/", (req, res) => {
  res.send("¡Hola mundo, desde Express!");
});

// Insertar datos de ejemplo
async function inicializarBD() {
  try {
    const count = await Producto.countDocuments();
    if (count === 0) {
      console.log("BD vacía. Insertando patos de ejemplo...");
      await Producto.insertMany(productosMock);
      console.log("Patos insertados correctamente.");
    } else {
      console.log("BD ya tiene productos. No se insertan patos de ejemplo.");
    }
  } catch (error) {
    console.error("Error al insertar patos de ejemplo:", error);
  }
}
inicializarBD();

export default app;
