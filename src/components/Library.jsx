import { library } from '../data/content';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { Split } from '../ui/Split';
import { TickList } from '../ui/TickList';
import styles from './Library.module.css';

export function Library() {
  return (
    <div className={styles.band}>
      <Section>
        <Split
          reversed
          kicker={library.kicker}
          title={library.title}
          body={library.body}
          image={library.image}
          imageAlt={library.imageAlt}
          imageW={library.imageW}
          imageH={library.imageH}
        >
          <TickList items={library.points} />
          <Button href="#start" className={styles.cta}>
            {library.cta}
          </Button>
        </Split>
      </Section>
    </div>
  );
}
