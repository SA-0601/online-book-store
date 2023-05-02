import { useEffect, useState } from 'react';
import * as adminAPI from '../../utilities/admin-api';
import styles from './AllBooks.module.css';


export default function AllBooks({ user, setUser }) {
  const [books, setBooks] = useState([]);
  useEffect(function() {

        async function getBooks() {
          const books = await adminAPI.getAll();
          setBooks(books);
        }
        getBooks();
      }, []);
  return (
    <main className={styles.NewOrderPage}>
      
      {books.map( (book) =>{
        return <h1>{book.name}</h1>
      })}
    </main>
  );
}