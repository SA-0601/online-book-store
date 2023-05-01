const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

// GET /api/books
router.get('/', booksCtrl.index);
// GET /api/books/:id
router.get('/:id', booksCtrl.show);

module.exports = router;