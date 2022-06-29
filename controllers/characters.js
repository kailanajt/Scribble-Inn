import { Character } from '../models/character.js'
// import { Profile } from '../models/profile.js'

function index (req, res) {
	Character.find({})
	.then(characters => {
		// console.log('characters')
		res.render('characters/index', {
			characters, //characters: characters,
			title: "Your Characters",
		})
	})
	.catch(err => {
		console.log(err)
		res.redirect("/")
	})
}

function newCharacter(req, res) {
	// console.log('please freaking work')
	res.render("characters/new", {
		title: 'Add Character',
	})
}

function create(req, res) {
	// console.log('please freaking work')
	// console.log("FORM DATA:", req.body)
	// req.body.owner = req.user.profile._id
	req.body.deathStatus = !!req.body.deathStatus
	Character.create(req.body)
	.then(character => {
		// console.log(character)
		res.redirect("/characters")
	})
	.catch(err => {
		console.log(err)
		res.redirect("/")
	})
}


	

export {
	index,
	newCharacter as new,
	create,
}