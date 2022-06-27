import mongoose from 'mongoose'

const Schema = mongoose.Schema

const characterSchema = new Schema({
name: String,
age: Number,
birthday: Date,
deceased: {
	type: Boolean,
},
hairColor:{
	type: String,
	enum: ['Blonde', 'Black', 'Brown', 'Sandy Blonde', 'Strawberry', 'Honey', 'Raven', 'White', 'Red', 'Green', 'Purple']
},
hairTexture: {
	type: String, 
	enum: ['Coarse', 'Coils', 'Curly', 'Straight', 'Wavy', 'Locs', 'Braids', 'Wringlets']
},
hairLength: {
	typr: String,
	enum: ['Shoulder Length', 'Bob Length', 'Afro Length', 'Waist Length', 'Hips Length']
},
height: Number,
eyeColor: {
	type: String, 
	enum: ['Brown', 'Green', 'Blue', 'Hazel', 'Gray', 'Amber',]
},
skinColor: {
	type: String,
}

}, {
	timestamps: true
})

const Character = mongoose.model('Character', characterSchema)

export {
  Character
}
