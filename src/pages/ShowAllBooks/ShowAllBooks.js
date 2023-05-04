
import styles from "./ShowAllBooks.module.css";
import Logo from "../../components/Logo/Logo";
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

import AllBooks from "../../components/AllBooks/AllBooks";

function ShowAllBooks({ user, setUser }) {
  
  return (
    <main className={styles.ShowAllBooks}>
      <aside>
        <Logo />
        <Link to="/admin/books" className="button btn-sm">
          ALL BOOKS
        </Link>
        <Link to="/admin" className="button btn-sm">
          CREATE
        </Link>
        <Link to="/admin/books" className="button btn-sm">
          EDIT
        </Link>
        <Link to="/admin/books" className="button btn-sm">
          DELETE
        </Link>
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <AllBooks />
      
      
    </main>
  );
}

export default ShowAllBooks;
