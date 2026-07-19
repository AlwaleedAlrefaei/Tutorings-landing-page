import { heroStudents, heroSrcSet, heroSizes, idpIelts } from '../assets';
import { hero } from '../data/content';
import { Button } from '../ui/Button';
import { ScoreReport } from './ScoreReport';
import styles from './Hero.module.css';

const TRUST = [
  { value: '+200', label: 'طالب بنتائج مثبتة' },
  { value: '+7.5', label: 'آيلتس لكل مدرّس' },
  { value: '24/7', label: 'جدولة مرنة' },
];

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.inner}`}>
        <div>
          <p className={styles.eyebrow}>
            <img src={idpIelts} alt="" width="220" height="107" />
            {hero.eyebrow}
          </p>

          <h1 id="hero-title" className={styles.title}>
            {hero.titleLead}
            <br />
            <span className={styles.accent}>{hero.titleAccent}</span>
          </h1>

          <p className={styles.lede}>{hero.lede}</p>

          <div className={styles.ctaRow}>
            <Button href="#start" withArrow>
              {hero.cta}
            </Button>
            <Button href="#programs" variant="ghost">
              تصفّح البرامج
            </Button>
          </div>

          <ul className={styles.trust}>
            {TRUST.map((t) => (
              <li key={t.label}>
                <b dir="ltr">{t.value}</b>
                <span>{t.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.photo}>
            <img
              src={heroStudents}
              srcSet={heroSrcSet}
              sizes={heroSizes}
              alt="طالبان من Tutorings يتحدثان بالإنجليزية"
              width="1400"
              height="745"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <ScoreReport className={styles.report} />
        </div>
      </div>
    </section>
  );
}
