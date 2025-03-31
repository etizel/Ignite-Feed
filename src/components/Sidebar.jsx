import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://png.pngtree.com/thumb_back/fw800/background/20231001/pngtree-futuristic-3d-rendering-computer-screen-terminal-hacking-with-running-programming-code-image_13538011.png"
        alt="Imagem futurística"
        style={{ width: '300px' }}
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/72351181?v=4"
          alt="avator do user"
        />
        <strong>Etizel Azevedo</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
