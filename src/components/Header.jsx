import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={igniteLogo}
        alt="Logo do projeto com pirâmides verdes verticais, tamanho: médio"
        className={styles.rotateLogo}
      />
      <h1>ignite</h1>
    </header>
  );
}
