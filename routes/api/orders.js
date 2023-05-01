const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// GET /api/orders/history
router.get('/history', ordersCtrl.history);
// POST /api/orders/cart/books/:id
router.post('/cart/books/:id', ordersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setBookQtyInCart);

module.exports = router;