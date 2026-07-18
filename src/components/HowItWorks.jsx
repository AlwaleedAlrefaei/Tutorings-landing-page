import { scheduling, steps } from '../data/content';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHead } from '../ui/Section';
import { Split } from '../ui/Split';
import { TickList } from '../ui/TickList';
import styles from './HowItWorks.module.css';

export function HowItWorks() {
  return (
    <Section id="how" tight labelledBy="how-title">
      <SectionHead
        id="how-title"
        kicker="كيف توصلك الخدمة للنتيجة"
        title="4 خطوات من أول اختبار حتى الشهادة"
        lede="لا يوجد شيء تكتشفه بنفسك. كل خطوة تسلّمك للتي بعدها."
      />

      <Reveal as="ol" className={styles.steps}>
        {steps.map((s) => (
          <li key={s.n} className={styles.step}>
            <span className={styles.n} aria-hidden="true">
              {s.n}
            </span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </li>
        ))}
      </Reveal>

      <div className={styles.scheduling}>
        <Split
          reversed
          kicker={scheduling.kicker}
          title={scheduling.title}
          image={scheduling.image}
          imageAlt={scheduling.imageAlt}
          imageW={scheduling.imageW}
          imageH={scheduling.imageH}
        >
          <TickList items={scheduling.points} />
        </Split>
      </div>
    </Section>
  );
}
