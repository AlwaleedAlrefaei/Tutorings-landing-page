import styles from './TickList.module.css';

export function TickList({ items, onDark = false }) {
  return (
    <ul className={`${styles.list} ${onDark ? styles.onDark : ''}`}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
