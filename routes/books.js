import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/books
router.get('/', isLoggedIn, booksCtrl.index)

// GET localhost:3000/books/new
router.get('/new', isLoggedIn, booksCtrl.new)

//GET localhost:3000/books/:id
router.get('/:id', isLoggedIn, booksCtrl.show)

//POSt localhost:3000/books
router.post('/', isLoggedIn, booksCtrl.create)


export {
	router
}