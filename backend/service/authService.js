import User from '../model/usersModel.js'
import bcrypt from 'bcryptjs'

export class authService {
  async register(name, email, password) {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      throw new Error('El email ya está registrado')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    try {
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword
      })

      return {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('El email ya está registrado')
      }
      throw error
    }
  }

  async login(email, password) {
    const user = await User.findOne({ email })
    if (!user) {
      throw new Error('Credenciales inválidas')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new Error('Credenciales inválidas')
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email
    }
  }
}

