import styles from './MenuListItem.module.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      <img className={styles.image} src={menuItem.image} alt='bookimage'></img>
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.author}>by {menuItem.author}</div>
      <div className={styles.year}>{menuItem.year}</div>
      <div className={styles.buy}>
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}