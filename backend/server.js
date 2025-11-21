import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productsRouter from './routes/productsRouter.js'

dotenv.config()
const app = express()

//  Puerto (desde .env o 5000 por defecto)
const PORT = process.env.PORT || 5000

//  Configuración de CORS (importante para permitir conexión con el frontend de Vite)
app.use(
  cors({
    origin: 'http://localhost:5173', // URL del frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // métodos permitidos
    credentials: true // si vas a manejar cookies o sesiones
  })
)

//  Middleware para leer JSON
app.use(express.json())

//  Ruta raíz de prueba
app.get('/', (req, res) => {
  res.send('API funcionando ')
})

//  Montar las rutas de productos
app.use('/api/products', productsRouter)
// app.use('/api/users', productsRouter)

//  Conexión a MongoDB
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log('Conectado a MongoDB en: ' + process.env.MONGOURL)
    app.listen(PORT, () =>
      console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
    )
  })
  .catch(err => console.error(' Error de conexión a MongoDB:', err.message))
