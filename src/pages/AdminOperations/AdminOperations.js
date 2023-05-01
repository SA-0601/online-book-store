import NewBook from "../../components/NewBook/NewBook";
import styles from "./AdminOperations.module.css";
import Logo from "../../components/Logo/Logo";
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

function AdminOperations({ user, setUser }) {
   

  return (
    <main className={styles.AdminOperations}>
      <aside>
        <Logo />
        
        <Link to="/admin/create" className="button btn-sm">
          Create
        </Link>
        <Link to="/" className="button btn-sm">
          Edit
        </Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>

      <NewBook />
    </main>
  );
}

export default AdminOperations;
