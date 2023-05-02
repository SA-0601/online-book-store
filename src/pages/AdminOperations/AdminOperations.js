
import styles from "./AdminOperations.module.css";
import Logo from "../../components/Logo/Logo";
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import NewBook from '../../components/NewBook/NewBook';

function AdminOperations({ user, setUser }) {
  
  return (
    <main className={styles.AdminOperations}>
      <aside>
        <Logo />
        <Link to="" className="button btn-sm">
          CREATE
        </Link>
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        {/* <Link to="/" className="button btn-sm">
          Edit
        </Link> */}
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <NewBook />
      
      
    </main>
  );
}

export default AdminOperations;
