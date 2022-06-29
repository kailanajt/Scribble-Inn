import mongoose from 'mongoose'

const Schema = mongoose.Schema

const characterSchema = new Schema({
name: String,
age: Number,
birthday: Date,
bookOrigin: String,
deathStatus: {
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
	type: String,
	enum: ['Shoulder', 'Bob', 'Afro', 'Waist', 'Hips']
},
height: String,
eyeColor: {
	type: String, 
	enum: ['Brown', 'Green', 'Blue', 'Hazel', 'Gray', 'Amber',]
},
skinColor: {
	type: String,
},
toNote: {
	type: String
},
owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
}, {
	timestamps: true
})

const Character = mongoose.model('Character', characterSchema)

export {
  Character
}
