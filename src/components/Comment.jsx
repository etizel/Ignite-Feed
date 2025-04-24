import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={true}
        src="https://avatars.githubusercontent.com/u/72351181?v=4"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Etizel Azevedo</strong>
              <time title="4 de abril às 14H:57M" dateTime="2025-04-04">
                Cerca de 2H atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="botão para remover conteúdo"
              className="btn"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            {'   '}
            Aplaudir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
