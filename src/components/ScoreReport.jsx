import { scoreBands } from '../data/content';
import { useInView } from '../hooks/useInView';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import styles from './ScoreReport.module.css';

/**
 * The signature element: a student's band-score report.
 * Bars animate once on scroll-in; each row is also a real progressbar for AT.
 */
export function ScoreReport({ className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const reduced = usePrefersReducedMotion();
  const animate = inView || reduced;

  return (
    <figure ref={ref} className={`${styles.report} ${className}`}>
      <div className={styles.head}>
        <h2>تقرير مستواك</h2>
        <span aria-hidden="true">CEFR / IELTS</span>
      </div>

      <div className={styles.bands}>
        {scoreBands.map((band, i) => (
          <div key={band.key} className={`${styles.band} ${styles[band.key]}`}>
            <span className={styles.name}>
              {band.label}
              {band.badge && <span className={styles.badge}>{band.badge}</span>}
            </span>
            <span className={styles.score}>{band.score}</span>
            <span
              className={styles.track}
              role="progressbar"
              aria-label={`${band.label}: ${band.score} من 9`}
              aria-valuenow={Number(band.score)}
              aria-valuemin={0}
              aria-valuemax={9}
            >
              <span
                className={styles.fill}
                style={{
                  width: animate ? `${band.pct}%` : 0,
                  transitionDelay: reduced ? '0ms' : `${260 + i * 130}ms`,
                }}
              />
            </span>
          </div>
        ))}
      </div>

      <figcaption className={styles.foot}>● يُحدَّث بعد كل حصة مباشرة</figcaption>
    </figure>
  );
}
