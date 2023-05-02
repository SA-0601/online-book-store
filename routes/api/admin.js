const express = require('express');
const router = express.Router();
const adminCtrl = require('../../controllers/api/admin');

// GET /api/admin
router.get('/books', adminCtrl.index);
// GET /api/admin/books/:id
router.get('/books/:id', adminCtrl.show);

module.exports = router;