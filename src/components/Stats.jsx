import { stats } from '../data/content';
import { Reveal } from '../ui/Reveal';
import styles from './Stats.module.css';

export function Stats() {
  return (
    <section className={styles.band} aria-labelledby="stats-title">
      <h2 id="stats-title" className="visually-hidden">
        أرقام Tutorings
      </h2>
      <Reveal as="ul" className={`wrap ${styles.grid}`}>
        {stats.map((s) => (
          <li key={s.label} className={styles.item}>
            <p className={styles.value} dir="ltr">
              {s.value}
            </p>
            <p className={styles.label}>{s.label}</p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
