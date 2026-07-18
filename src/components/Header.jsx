import { logo } from '../assets';
import { site } from '../data/site';
import { useScrolled } from '../hooks/useScrolled';
import { Button } from '../ui/Button';
import styles from './Header.module.css';

export function Header() {
  const scrolled = useScrolled();

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.brand} href="#top">
          <img src={logo} alt="" width="38" height="38" />
          <b>{site.name}</b>
        </a>
        <p className={styles.tagline}>{site.tagline}</p>
        <Button href="#start" size="sm">
          سجّل لمحاضرة مجانية
        </Button>
      </div>
    </header>
  );
}
