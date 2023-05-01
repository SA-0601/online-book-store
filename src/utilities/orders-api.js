import sendRequest from './send-request';

  const BASE_URL = '/api/orders';

  // Retrieve an unpaid order for the logged in user
  export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
  }

  // Add an book to the cart
  export function addBookToCart(bookId) {
    // Just send bookId for best security (no pricing)
    return sendRequest(`${BASE_URL}/cart/books/${bookId}`, 'POST');
  }

  // Update the book's qty in the cart
  // Will add the book to the order if not currently in the cart
  // Sending info via the data payload instead of a long URL
  export function setBookQtyInCart(bookId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { bookId, newQty });
  }

  // Updates the order's (cart's) isPaid property to true
  export function checkout() {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
  }

  // Return all paid orders for the logged in user
  export function getOrderHistory() {
    return sendRequest(`${BASE_URL}/history`);
  }