import { englishDoodle } from '../assets';
import { partners } from '../data/content';
import styles from './Partners.module.css';

export function Doodle() {
  return (
    <div className={styles.doodle} aria-hidden="true">
      <img src={englishDoodle} alt="" width="1400" height="259" loading="lazy" decoding="async" />
    </div>
  );
}

export function Partners() {
  return (
    <section className={styles.strip} aria-labelledby="partners-label">
      <div className="wrap">
        <h2 id="partners-label" className={styles.label}>
          شراكات واعتمادات
        </h2>
        <ul className={styles.logos}>
          {partners.map((p) => (
            <li key={p.alt}>
              <img
                src={p.src}
                alt={p.alt}
                className={p.tall ? styles.tall : undefined}
                width={p.w}
                height={p.h}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
