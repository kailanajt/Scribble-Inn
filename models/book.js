import mongoose from 'mongoose'

const Schema = mongoose.Schema

const bookSchema = new Schema({
	title: String,
	author: String,
	genre: {
			type: String,
			enum: ['Horror', 'Post-Apocalyptic', 'Suspence', 'Thriller', 'Romance', 'Young Adult', 'Comedy', 'Satire', 'Mystery', 'Supernatural', 'Fantasy', 'High Fantasy', 'LGBTQ+', 'Dystopia', 'What your heart desires']
	},
	completed: Boolean,
	summary: String,
	
}, {
	timestamps: true,
})

const Book = mongoose.model('Book', bookSchema)

export {
  Book
}