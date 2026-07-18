import { logo } from '../assets';
import { footerNav, socials } from '../data/content';
import { site } from '../data/site';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.about}>
            <a className={styles.brand} href="#top">
              <img src={logo} alt="" width="38" height="38" loading="lazy" />
              <b>{site.name}</b>
            </a>
            <p>
              ملتزمون بتقديم تجربة تعلّم مخصصة تمامًا، ونخصص اهتمامًا فرديًا لكل طالب لتحسين رحلته
              التعليمية.
            </p>
            <div className={styles.contact}>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <ul className={styles.socials}>
              {socials.map((s) => (
                <li key={s}>
                  <a href="#top" aria-label={`${site.name} على ${s}`}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerNav.map((col) => (
            <nav key={col.heading} className={styles.col} aria-label={col.heading}>
              <h2>{col.heading}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bar}>
          <span>جميع الحقوق محفوظة © 2024 {site.name}</span>
          <span>
            <a href="#top">الشروط والأحكام</a> · <a href="#top">سياسة الخصوصية</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
