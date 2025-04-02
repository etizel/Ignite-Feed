import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/72351181?v=4"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Etizel Azevedo</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time title="1 de abril às 2H:16M" datetime="2025-04-01">
          Adicionado há uma hora
        </time>
      </header>
      <div className={styles.content}>
        <h3 className={styles.h3}>
          Novo Projeto no Ar! 🎵 Clone Imersivo do Spotify
        </h3>
        <p>
          Intusiastas da música e tech lovers, É com grande satisfação que
          anuncio a adição mais recente ao meu portfólio de desenvolvimento: uma
          experiência musical imersiva inspirada na interface do Spotify.
        </p>
        👉 <a href="etizel.com">etizel.com</a>
        <br />
        <p>
          <a href="">#novoprojeto</a>
          {'  '}
          <a href="">#react</a>
          {'  '}
          <a href="">#javascript</a>
          {'  '}
        </p>
      </div>
    </article>
  );
}
