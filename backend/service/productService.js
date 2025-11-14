import Product from '../model/productsModel.js'

export class productService {
  async getOne(id) {
    const producto = await Product.findOne({ id })
    console.log(producto)
    return producto
  }

  async getAll() {
    const productos = await Product.find()
    return productos
  }

  async createOne(name, price) {
    const idGenerado = Math.ceil(Math.random() * 1000)

    const producto = {
      name,
      price,
      state: true,
      id: idGenerado
    }

    const productoCreado = await Product.create(producto)
    return productoCreado
  }

  update(producto) {
    const productoActualizado = Product.updateOne(
      { id: producto.id },
      { ...producto }
    )
    return productoActualizado
  }

  deleteLogicProduct(id) {
    const productoEliminado = Product.updateOne({ id }, { state: false })
    return productoEliminado
  }

  deleteFisicProduct(id) {
    const productoEliminado = Product.deleteOne({ id })
    return productoEliminado
  }
}
