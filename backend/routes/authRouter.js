import { Router } from 'express'
import { register, login } from '../controller/authController.js'

const authRouter = Router()

// POST /auth/register - Registro de nuevo usuario
authRouter.post('/register', register)

// POST /auth/login - Login de usuario (para uso futuro)
authRouter.post('/login', login)

export default authRouter

