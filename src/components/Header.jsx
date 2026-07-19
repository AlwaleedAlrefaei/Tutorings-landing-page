import { logo } from '../assets';
import { site } from '../data/site';
import { useScrolled } from '../hooks/useScrolled';
import { Button } from '../ui/Button';
import styles from './Header.module.css';

const NAV = [
  { href: '#programs', label: 'البرامج' },
  { href: '#how', label: 'كيف نعمل' },
  { href: '#compare', label: 'المقارنة' },
  { href: '#faq', label: 'الأسئلة' },
];

export function Header() {
  const scrolled = useScrolled();

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.brand} href="#top">
          <img src={logo} alt="" width="38" height="38" />
          <b>{site.name}</b>
        </a>

        <nav className={styles.nav} aria-label="روابط الصفحة">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="#start" size="sm">
          سجّل لمحاضرة مجانية
        </Button>
      </div>
    </header>
  );
}
