import { Character } from '../models/character.js'

function newCharacter(req, res) {
// console.log("this works!")
res.render("character/new", {
	title: "Add Character",
	})
}

function create (req, res) {
	//deathStatus checkbox to boolean:
	req.body.deathStatus = !!req.body.deathStatus
	Character.create(req.body)
	.then(character => {
		res.redirect ('/characters/new')
	})
	.catch(err => {
    res.redirect('/characters')
  })
}

export {
newCharacter as new,
create

}