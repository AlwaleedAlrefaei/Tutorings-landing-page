import { features, guarantee } from '../data/content';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHead } from '../ui/Section';
import styles from './Features.module.css';

export function Features() {
  return (
    <Section id="features" tight labelledBy="features-title">
      <SectionHead
        id="features-title"
        kicker="ما الذي تحصل عليه فعليًا"
        title="مميزات مبنية على سبب واحد: أن تتحسّن أنت"
      />

      <Reveal as="ul" className={styles.grid}>
        {features.map((f) => (
          <li key={f.title} className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              {f.icon}
            </span>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </li>
        ))}
      </Reveal>

      <Reveal className={styles.gold}>
        <h3>{guarantee.title}</h3>
        <p>{guarantee.body}</p>
      </Reveal>
    </Section>
  );
}
