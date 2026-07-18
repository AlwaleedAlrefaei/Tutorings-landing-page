import { finalCta } from '../data/content';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import styles from './FinalCta.module.css';

export function FinalCta() {
  return (
    <section id="start" className={styles.band} aria-labelledby="final-title">
      <Reveal className="wrap">
        <h2 id="final-title" className={styles.title}>
          {finalCta.title}
        </h2>
        <p className={styles.body}>{finalCta.body}</p>
        <Button href="#start" variant="onDark" withArrow className={styles.cta}>
          {finalCta.cta}
        </Button>
        <p className={styles.note}>{finalCta.note}</p>
      </Reveal>
    </section>
  );
}
