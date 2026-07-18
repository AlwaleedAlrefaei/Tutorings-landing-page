import { programs } from '../data/content';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHead } from '../ui/Section';
import styles from './Programs.module.css';

export function Programs() {
  return (
    <Section id="programs" labelledBy="programs-title">
      <SectionHead
        id="programs-title"
        kicker="البرامج"
        title="برنامجان، وهدف واحد يخصّك"
        lede="اختر حسب ما تحتاجه اليوم — والضمان الذهبي يغطي كليهما."
      />

      <Reveal as="ul" className={styles.grid}>
        {programs.map((p) => (
          <li key={p.id} className={`${styles.card} ${styles[p.id]}`}>
            <img
              src={p.image}
              alt=""
              width={p.imageW}
              height={p.imageH}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.body}>
              <span className={styles.pill}>{p.pill}</span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.text}>{p.body}</p>
              <Button
                href="#start"
                variant={p.variant}
                withArrow
                className={styles.cta}
                aria-label={`ابدأ برنامج ${p.title}`}
              >
                ابدأ البرنامج
              </Button>
            </div>
          </li>
        ))}
      </Reveal>
    </Section>
  );
}
