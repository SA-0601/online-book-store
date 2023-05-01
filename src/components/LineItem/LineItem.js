import styles from './LineItem.module.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
return (
  <div className={styles.LineItem}>
    <img className={styles.image} src={lineItem.book.image} alt='bookimage'></img>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr">{lineItem.book.name}</span>
      {/* <span className="align-ctr">{lineItem.book.author}</span> */}
      {/* <span className="align-ctr">{lineItem.book.year}</span> */}
      {/* <span>{lineItem.book.price.toFixed(2)}</span> */}
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.book._id, lineItem.qty - 1)}
        >−</button>
      }
      <span>{lineItem.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.book._id, lineItem.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
  </div>
);
}