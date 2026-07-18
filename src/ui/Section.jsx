import styles from './Section.module.css';
import { Reveal } from './Reveal';

export function Section({ id, tight = false, className = '', labelledBy, children }) {
  const classes = [styles.section, tight && styles.tight, className].filter(Boolean).join(' ');
  return (
    <section id={id} className={classes} aria-labelledby={labelledBy}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function SectionHead({ kicker, title, lede, id, center = false }) {
  return (
    <Reveal className={`${styles.head} ${center ? styles.center : ''}`}>
      {kicker && <span className={styles.kicker}>{kicker}</span>}
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </Reveal>
  );
}
