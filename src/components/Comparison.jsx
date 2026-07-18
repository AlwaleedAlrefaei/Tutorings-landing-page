import { comparison } from '../data/content';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHead } from '../ui/Section';
import styles from './Comparison.module.css';

function Cell({ value }) {
  if (value === true) {
    return (
      <>
        <span className={styles.yes} aria-hidden="true">
          ✓
        </span>
        <span className="visually-hidden">متوفر</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <span className={styles.no} aria-hidden="true">
          ✕
        </span>
        <span className="visually-hidden">غير متوفر</span>
      </>
    );
  }
  return <span className={styles.ltd}>{value}</span>;
}

export function Comparison() {
  const { competitors, rows } = comparison;

  return (
    <Section tight labelledBy="compare-title">
      <SectionHead id="compare-title" kicker="لماذا نحن" title="الصفات التي تميّزنا عن غيرنا" />

      <Reveal>
        <div className={styles.scroll} tabIndex={0} role="region" aria-label="جدول مقارنة المنصات">
          <table className={styles.table}>
            <caption className="visually-hidden">
              مقارنة بين Tutorings ومنصات تعليم اللغة الإنجليزية الأخرى
            </caption>
            <thead>
              <tr>
                <th scope="col">الميزة</th>
                <th scope="col" className={styles.us}>
                  Tutorings SA
                </th>
                {competitors.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td className={styles.usCell}>
                    <Cell value={row.us} />
                  </td>
                  {row.others.map((v, i) => (
                    <td key={competitors[i]}>
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.hint}>← اسحب الجدول أفقيًا لعرض بقية الأعمدة</p>
      </Reveal>
    </Section>
  );
}
