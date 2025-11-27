import { authService } from '../service/authService.js'

const as = new authService()

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' })
    }

    const newUser = await as.register(name, email, password)
    res.status(201).json({ message: 'Usuario registrado correctamente', user: newUser })
  } catch (error) {
    console.error('Error en register:', error)
    if (error.message === 'El email ya está registrado') {
      return res.status(409).json({ message: error.message })
    }
    res.status(500).json({ message: 'Error al registrar usuario' })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son necesarios' })
    }

    const user = await as.login(email, password)
    res.status(200).json({ message: 'Login exitoso', user })
  } catch (error) {
    res.status(401).json({ message: error.message || 'Error al iniciar sesión' })
  }
}

