import { heroStudents, heroSrcSet, heroSizes, idpIelts } from '../assets';
import { hero } from '../data/content';
import { Button } from '../ui/Button';
import { ScoreReport } from './ScoreReport';
import styles from './Hero.module.css';

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
            <p className={styles.proof}>{hero.proof}</p>
          </div>
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
