import { format, formatDistanceToNow } from 'date-fns';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ author, publishedAt, content }) {
  const publishedFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mmh");

  const publishDateRelativeNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

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

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <button type="submit">Comentar</button>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
