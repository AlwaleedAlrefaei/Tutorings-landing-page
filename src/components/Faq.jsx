import { useId, useState } from 'react';
import { faqs } from '../data/content';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHead } from '../ui/Section';
import styles from './Faq.module.css';

function FaqItem({ q, a, open, onToggle }) {
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <li className={`${styles.item} ${open ? styles.open : ''}`}>
      <h3>
        <button
          id={buttonId}
          type="button"
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {q}
          <span className={styles.icon} aria-hidden="true">
            +
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.panel}>
        <div className={styles.panelInner}>
          <p className={styles.answer}>{a}</p>
        </div>
      </div>
    </li>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section labelledBy="faq-title">
      <SectionHead id="faq-title" kicker="أسئلة متكررة" title="قبل أن تسجّل" center />

      <Reveal as="ul" className={styles.list}>
        {faqs.map((item, i) => (
          <FaqItem
            key={item.q}
            q={item.q}
            a={item.a}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </Reveal>
    </Section>
  );
}
