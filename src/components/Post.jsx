import { format, formatDistanceToNow } from 'date-fns';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

const coments = [1, 2, 3];

export function Post({ author, publishedAt, content }) {
  const publishedFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'");

  const publishDateRelativeNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    console.log('test');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedFormatted} dateTime={publishedAt.toISOString()}>
          {publishDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <button type="submit">Comentar</button>
      </form>
      <div className={styles.commentList}>
        {coments.map((coment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
