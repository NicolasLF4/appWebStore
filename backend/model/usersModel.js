import mongoose from 'mongoose'
const { Schema, model } = mongoose

const usersSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const User = model('User', usersSchema)
export default User

