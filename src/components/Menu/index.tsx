import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type availableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<availableThemes>('dark');

  function handleToggleTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    const newTheme: availableThemes = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return (
    <div className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Ir para historico'
        title='Ir para historico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Ir para configurações'
        title='Ir para configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleToggleTheme}
      >
        <SunIcon />
      </a>
    </div>
  );
};
