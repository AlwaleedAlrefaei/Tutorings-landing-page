import styles from './Split.module.css';
import { Reveal } from './Reveal';

/** Two-column text/media block; `reversed` puts the media first on wide screens. */
export function Split({
  kicker,
  title,
  body,
  image,
  imageAlt,
  imageW,
  imageH,
  reversed = false,
  children,
}) {
  return (
    <Reveal className={`${styles.split} ${reversed ? styles.reversed : ''}`}>
      <div>
        {kicker && <span className={styles.kicker}>{kicker}</span>}
        <h2 className={styles.title}>{title}</h2>
        {body && <p className={styles.body}>{body}</p>}
        {children}
      </div>
      <div className={styles.media}>
        <img
          src={image}
          alt={imageAlt}
          width={imageW}
          height={imageH}
          loading="lazy"
          decoding="async"
        />
      </div>
    </Reveal>
  );
}
