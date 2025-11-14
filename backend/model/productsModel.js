import mongoose from 'mongoose'
const { Schema, model } = mongoose

const productsSchema = new Schema({
  name: String,
  price: Number,
  state: Boolean,
  id: Number
})

const Product = model('Product', productsSchema)
export default Product
