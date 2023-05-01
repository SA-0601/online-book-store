const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = require('./bookSchema');

//* Line item Schema
const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  book: bookSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
  // 'this' is bound to the lineItem subdoc
  return this.qty * this.book.price;
});

//*Order Schema
const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineItems: [lineItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineItems.reduce((total, book) => total + book.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineItems.reduce((total, book) => total + book.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  // 'this' is the Order model
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update
    { user: userId },
    // upsert option will create the doc if
    // it doesn't exist
    { upsert: true, new: true }
  );
};

orderSchema.methods.addBookToCart = async function(bookId) {
  const cart = this;
  // Check if book already in cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.book._id.equals(bookId));
  if (lineItem) {
    lineItem.qty += 1;
  } else {
    const book = await mongoose.model('Book').findById(bookId);
    cart.lineItems.push({ book });
  }
  return cart.save();
};

// Instance method to set a book's qty in the cart (will add book if does not exist)
orderSchema.methods.setBookQty = function(bookId, newQty) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Find the line item in the cart for the menu item
  const lineItem = cart.lineItems.find(lineItem => lineItem.book._id.equals(bookId));
  if (lineItem && newQty <= 0) {
    // Calling remove, removes itself from the cart.lineItems array
    lineItem.remove();
  } else if (lineItem) {
    // Set the new qty - positive value is assured thanks to prev if
    lineItem.qty = newQty;
  }
  // return the save() method's promise
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);