import { teachers } from '../data/content';
import { Section } from '../ui/Section';
import { Split } from '../ui/Split';
import styles from './Teachers.module.css';

export function Teachers() {
  return (
    <div className={styles.band}>
      <Section>
        <Split
          reversed
          kicker={teachers.kicker}
          title={teachers.title}
          image={teachers.image}
          imageAlt={teachers.imageAlt}
          imageW={teachers.imageW}
          imageH={teachers.imageH}
        >
          <ul className={styles.cards}>
            {teachers.cards.map((c) => (
              <li key={c.title} className={styles.card}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ul>
        </Split>
      </Section>
    </div>
  );
}
