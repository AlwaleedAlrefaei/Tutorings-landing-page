import { trustpilot } from '../assets';
import { testimonials } from '../data/content';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHead } from '../ui/Section';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <Section labelledBy="reviews-title">
      <SectionHead
        id="reviews-title"
        kicker="ماذا يقول عملاؤنا"
        title="نتائج قالها الطلاب بأنفسهم"
      />

      <Reveal as="ul" className={styles.grid}>
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className={styles.card}>
              <blockquote className={styles.quote} lang={t.lang}>
                {t.quote}
              </blockquote>
              <figcaption className={styles.who}>
                <span className={styles.avatar} aria-hidden="true">
                  {t.name.trim().charAt(0)}
                </span>
                <span className={styles.whoText}>
                  {t.name}
                  <span className={styles.meta}>{t.meta}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </Reveal>

      <Reveal className={styles.trust}>
        <img
          src={trustpilot}
          alt="تقييم Tutorings على Trustpilot: 4.3 من 5، شركة موثّقة"
          width="920"
          height="379"
          loading="lazy"
          decoding="async"
        />
        <a href="https://www.trustpilot.com/" target="_blank" rel="noopener noreferrer">
          🔎 تصفّح تقييماتنا على Trustpilot
        </a>
      </Reveal>
    </Section>
  );
}
