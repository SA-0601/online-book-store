import { useEffect, useState } from "react";
import * as adminAPI from "../../utilities/admin-api";
import styles from "./AllBooks.module.css";

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  useEffect(function () {
    async function getBooks() {
      const books = await adminAPI.getAll();
      setBooks(books);
    }
    getBooks();
  }, []);
  return (
    <main className={styles.AllBooks}>
      <h1 className={styles.heading}>AVAILABLE BOOKS</h1>
      {books.map((book) => {
        return (
          <div className={styles.book}>
            
            <div className={styles.name}>{book.name}</div>
            <div className={styles.author}>by {book.author}</div>
            
            <button className={styles.editBtn}>Edit</button>
            <button className={styles.deleteBtn}>Delete</button>
          </div>
        );
      })}
    </main>
  );
}
