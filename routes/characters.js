import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/characters
router.get('/', charactersCtrl.index)

// GET localhost:3000/characters/new
router.get('/new', isLoggedIn, charactersCtrl.new)

//GET localhost:3000/characters/:id
router.get('/:id', charactersCtrl.show)

// GET localhost:3000/characters/:id/edit
router.get('/:id/edit', isLoggedIn, charactersCtrl.edit)

// POST localhost:3000/characters
router.post('/', isLoggedIn, charactersCtrl.create)

// DELETE localhost:3000/characters/:id
router.delete("/:id", isLoggedIn, charactersCtrl.delete)

//PUT localhost:3000/movies/:id
router.put("/:id", isLoggedIn, charactersCtrl.update)


export {
	router
}