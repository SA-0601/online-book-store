const book = require('./book');

const Schema = require('mongoose').Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  image: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  // category: { name:String },
  year: { type: Number, required: true },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = bookSchema;