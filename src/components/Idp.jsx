import { idpIelts, idpRoom } from '../assets';
import { idp } from '../data/content';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { TickList } from '../ui/TickList';
import styles from './Idp.module.css';

export function Idp() {
  return (
    <Section labelledBy="idp-title">
      <Reveal className={styles.panel}>
        <img
          className={styles.bg}
          src={idpRoom}
          alt=""
          width="1400"
          height="935"
          loading="lazy"
          decoding="async"
        />
        <div className={styles.inner}>
          <img
            className={styles.mark}
            src={idpIelts}
            alt="IDP IELTS"
            width="220"
            height="107"
            loading="lazy"
          />
          <span className={styles.kicker}>{idp.kicker}</span>
          <h2 id="idp-title" className={styles.title}>
            {idp.title}
          </h2>
          <TickList items={idp.points} onDark />
          <Button href="#start" variant="onDark" withArrow className={styles.cta}>
            {idp.cta}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
