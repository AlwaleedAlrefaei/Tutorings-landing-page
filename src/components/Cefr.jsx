import { cefr } from '../data/content';
import { Section } from '../ui/Section';
import { Split } from '../ui/Split';
import { TickList } from '../ui/TickList';

export function Cefr() {
  return (
    <Section tight>
      <Split
        kicker={cefr.kicker}
        title={cefr.title}
        body={cefr.body}
        image={cefr.image}
        imageAlt={cefr.imageAlt}
        imageW={cefr.imageW}
        imageH={cefr.imageH}
      >
        <TickList items={cefr.points} />
      </Split>
    </Section>
  );
}
