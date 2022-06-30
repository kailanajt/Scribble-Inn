import { Book } from '../models/book.js'



function newBook (req, res) {
	// console.log('is this thing on')
	res.render('books/new', {
			title: 'Add Book'
	})
}

function create(req, res) {
	req.body.completed = !!req.body.completed
	if(req.body.featuredCharacters) {
			req.body.featuredCharacters = req.body.featuredCharacters.split(", ")
	}
	// console.log('pretty pls work')
	// console.log('FORM DATA:', req.body)
	Book.create(req.body)
	.then(book => {
			// console.log('bOOOOKs')
			res.redirect('/books')
	})    
	.catch(err => {
	console.log(err)
	res.redirect("/")
})
}

function index (req, res) {
	// console.log('workkkkkk')
	Book.find({})
	.then(books => {
			res.render('books/index', {
				books: books,
				title: 'Your Books',
			})
	})
	.catch(err => {
	console.log(err)
	res.redirect("/")
})
}

export {
	newBook as new,
	create,
	index
}