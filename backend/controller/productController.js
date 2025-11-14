import { productService } from '../service/productService.js'

const ps = new productService()

export const getOneProduct = async (req, res) => {
  try {
    const producto = await ps.getOne(req.params.id)
    res.send(producto)
  } catch (error) {
    //devolvemos error500: error servidor
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const productos = await ps.getAll()
    res.status(200).json(productos)

    res.send(productos)
  } catch (error) {
    console.log(error)
  }
}

export const createOneProduct = (req, res) => {
  const { name, price, state } = req.body

  if (!name || !price || !state) {
    res.send('faltan parametros')
  }

  const productoCreado = ps.createOne(name, price)

  res.send(productoCreado)
}

export const updateProduct = async (req, res) => {
  const { id } = req.params
  const { name, price, state } = req.body

  const producto = {
    name,
    price,
    state,
    id
  }

  const productoActualizado = await ps.update(producto)
  res.send(productoActualizado)
}

export const deleteProduct = (req, res) => {}
