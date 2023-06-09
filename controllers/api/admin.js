const Book = require('../../models/book');
const mongoose = require('mongoose');
module.exports = {
  index,
  show,
  create
};

async function index(req, res) {
  try{
    const books = await Book.find({}).sort('name').exec();
    console.log(books);
    // re-sort based upon the sortOrder of the categories
    // books.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(books);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}
async function create(req, res) {
  try {
    const data = req.body;
    const categoryId = mongoose.Types.ObjectId(data.category);
    const bookData = { ...data, category: categoryId };
    const book = await Book.create(bookData);
    res.status(200).json(book);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
async function show(req, res) {
  try{
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}