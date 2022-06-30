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
	req.body.deathStatus = !!req.body.deathStatus
	// req.body.owner = req.user.profile._id
	for (let key in req.body) {
		if(req.body[key] === '') delete req.body[key]
	}
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

function show(req, res) {
	// console.log(req.params.character)
	// req.body.owner = req.user.profile._id
	Character.findById(req.params.id)
	.then(character => {
		// console.log(character)
		res.render("characters/show", {
			character: character,
			title: `${character.name}'s Details`
		})
	})
	.catch(err => {
		console.log(err)
		res.redirect("/")
	})
}
	
function deleteCharacter(req, res) {
	// console.log('pls delete')
	Character.findByIdAndDelete(req.params.id)
	.then(() => {
		res.redirect("/characters")
	})
	.catch(err => {
		console.log(err)
		res.redirect("/")
	})
}

function edit (req, res) {
	// console.log('pls work pls')
	Character.findById(req.params.id)
	.then(character => {
		res.render('characters/edit', {
			character: character,
			title: "Edit Character"
		})
	})
	.catch(err => {
		console.log(err)
		res.redirect("/")
	})
}

function update (req, res) {
	// console.log('pls work pls')
	// console.log('REQ.PARAMS', req.params)
	// console.log('REQ.BODY', req.body)
	req.body.deathStatus = !!req.body.deathStatus
	for (let key in req.body) {
		if(req.body[key] === '') delete req.body[key]
	}
	Character.findByIdAndUpdate(req.params.id, req.body, {new: true})
	.then(character => {
		// console.log(character)
		res.redirect(`/characters/${character._id}`)
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
	show,
	deleteCharacter as delete,
	edit,
	update,
}