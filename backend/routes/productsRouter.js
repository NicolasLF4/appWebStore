import { Router } from 'express'
import {
  createOneProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct
} from '../controller/productController.js'
const productsRouter = Router()
//ABMC | CRUD

//GET con un id: que va a traer un elemento
productsRouter.get('/:id', getOneProduct)

//GET: que va a traer todos los elementos*
productsRouter.get('/', getAllProducts)

//POST datos en el body: crea un elemento
productsRouter.post('/', createOneProduct)

//PUT datos en el body + id: actualiza un elemento especifico
productsRouter.put('/:id', updateProduct)

//DELETE con un id: eliminar un elemento de la base de datos (logica/fisica)
productsRouter.delete('/:id', deleteProduct)

export default productsRouter
