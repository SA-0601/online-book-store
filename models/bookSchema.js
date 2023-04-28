const book = require('./book');

const Schema = require('mongoose').Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  year: { type: Number, required: true },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = bookSchema;