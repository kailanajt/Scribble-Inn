import { Character } from '../models/character.js'
// import { Profile } from '../models/profile.js'

function index (req, res) {
	req.body.owner = req.user.profile._id
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
	req.body.owner = req.user.profile._id
	// console.log('please freaking work')
	res.render("characters/new", {
		title: 'Add Character',
	})
}

function create(req, res) {
	// console.log('please freaking work')
	// console.log("FORM DATA:", req.body)
	req.body.deathStatus = !!req.body.deathStatus
	req.body.owner = req.user.profile._id
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
	// req.body.owner = req.user.profile._id
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
	Character.findById(req.params.id)
	.then(character => {
		if (character.owner.equals(req.user.profile._id)) {
			character.delete()
			.then(() => {
				res.redirect('/characters')
			})
		} else {
		throw new Error ('NOT AUTHORIZED')
		}
	})
	.catch(err => {
        console.log(err)
        res.redirect("/")
    })
}

function edit (req, res) {
    req.body.owner = req.user.profile._id
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
	Character.findById(req.params.id)
	.then(character => {
		if (character.owner.equals(req.user.profile._id)) {
			req.body.deathStatus = !!req.body.deathStatus
			character.updateOne(req.body, {new: true})
			.then(updatedCharacter => {
				res.redirect(`/characters/${character._id}`)
			})
		} else {
		throw new Error ('NOT AUTHORIZED')
		}
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