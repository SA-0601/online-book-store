import styles from './MenuList.module.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToOrder }) {
  const books = menuItems.map(book =>
    <MenuListItem
      key={book._id}
      handleAddToOrder={handleAddToOrder}
      menuItem={book}
    />
  );
  return (
    <main className={styles.MenuList}>
      {books}
    </main>
  );
}