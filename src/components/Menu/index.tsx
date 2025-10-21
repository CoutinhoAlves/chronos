import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type availableThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<availableThemes>('dark');

  function handleToggleTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const newTheme: availableThemes = prevTheme === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  }

  // trabalha com efeitos colaterais
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    return () => {
      console.log('cleanup');
    };
  }, [theme]);

  return (
    <div className={styles.menu}>
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
