import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/characters
router.get('/', charactersCtrl.index)

// GET localhost:3000/characters/new
router.get('/new', isLoggedIn, charactersCtrl.new)

//GET localhost:3000/characters/:id
router.get('/:id', isLoggedIn, charactersCtrl.show)

// POST localhost:3000/characters
router.post('/', isLoggedIn, charactersCtrl.create)


export {
	router
}