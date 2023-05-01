import styles from './Logo.module.css';
import logo from './logo.png';
export default function Logo() {
return (
  <div className={styles.Logo}>
    <img className={`${styles.logoSize}`} src={logo} alt="logo"></img>
    <div>Book Store</div>
  </div>
);
}