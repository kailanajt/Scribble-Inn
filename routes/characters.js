import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET localhost:3000/characters/create
router.get('/', isLoggedIn, charactersCtrl.new)

// POST /movies
router.post('/character', isLoggedIn, charactersCtrl.create)

export {
	router
}