import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productsRouter from './routes/productsRouter.js'
import authRouter from './routes/authRouter.js'

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

//  Montar las rutas de autenticación
app.use('/auth', authRouter)

//  Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
  
  //  Conexión a MongoDB
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log('Conectado a MongoDB en: ' + process.env.MONGOURL)
    })
    .catch(err => {
      console.error('Error de conexión a MongoDB:', err.message)
      console.log('El servidor está corriendo pero sin conexión a la base de datos')
    })
})
