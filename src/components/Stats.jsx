import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/content';
import { useInView } from '../hooks/useInView';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { Reveal } from '../ui/Reveal';
import styles from './Stats.module.css';

const PARTS = /^(\D*)(\d+(?:\.\d+)?)(.*)$/;

/** Counts a numeric value up from zero once it scrolls into view. */
function StatValue({ value }) {
  const match = PARTS.exec(value);
  const [ref, inView] = useInView({ threshold: 0.4 });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);
  const done = useRef(false);

  const prefix = match ? match[1] : '';
  const target = match ? Number(match[2]) : 0;
  const suffix = match ? match[3] : '';
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0;

  useEffect(() => {
    if (!match || done.current || reduced || !inView) return;
    done.current = true;

    const duration = 1100;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, match, value, prefix, target, suffix, decimals]);

  return (
    <p ref={ref} className={styles.value} dir="ltr">
      {match && !reduced ? display : value}
    </p>
  );
}

export function Stats() {
  return (
    <section className={styles.band} aria-labelledby="stats-title">
      <h2 id="stats-title" className="visually-hidden">
        أرقام Tutorings
      </h2>
      <Reveal as="ul" className={`wrap ${styles.grid}`}>
        {stats.map((s) => (
          <li key={s.label} className={styles.item}>
            <StatValue value={s.value} />
            <p className={styles.label}>{s.label}</p>
          </li>
        ))}
      </Reveal>
    </section>
  );
}
