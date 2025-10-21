import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer} >
      <a href=''>Entenda como funciona a técnica pomodoro</a>
      <a href=''>Chrono Pomodoro &copy; {new Date().getFullYear()} - Feito com React-Vite</a>
    </footer>
  );
};
