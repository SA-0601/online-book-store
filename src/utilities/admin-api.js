import sendRequest from './send-request';
import mongoose from 'mongoose';
const BASE_URL = 'api/admin';

export function getAll() {
  return sendRequest(`${BASE_URL}/books`);
}

// export function createBook(formData){
//   return sendRequest(`${BASE_URL}/new`,'POST',formData);
// }
export async function createBook(book) {
  const res = await fetch('/api/admin/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: book.name,
      author: book.author,
      image: book.image,
      category: mongoose.Types.ObjectId(book.category), // Convert category string to ObjectId
      year: book.year,
      price: book.price
    })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg);
  return data;
}


export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}