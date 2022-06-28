import { Character } from '../models/character.js'

	function index (req, res) {
		Character.find({})
		.then(characters => {
			// console.log('characters')
			res.render('characters/index', {
				characters, //characters: characters,
				title: "Your Characters"
			})
		})
		.catch(err => {
			console.log(err)
			res.redirect("/")
		})
	}
	

export {
	index,
}