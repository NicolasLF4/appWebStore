import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

//  Configuración de CORS (importante para permitir conexión con el frontend de Vite)
app.use(cors({
  origin: "http://localhost:5173", // URL del frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // métodos permitidos
  credentials: true, // si vas a manejar cookies o sesiones
}));

//  Middleware para leer JSON
app.use(express.json());

//  Ruta raíz de prueba
app.get("/", (req, res) => {
  res.send("API funcionando ");
});

//  Puerto (desde .env o 5000 por defecto)
const PORT = process.env.PORT || 5000;

//  Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" Conectado a MongoDB");
    app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
  })
  .catch((err) => console.error(" Error de conexión a MongoDB:", err.message));
