import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import styles from './App.module.css';
import './global.css';
// author: {avatarUrl, name:"" , role:""}
// publishedAt: Date
// content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
      name: 'Etizel Azevedo',
      role: 'Developer Full Stack',
    },
    content: [
      { type: 'paragraph', content: 'Falaaa Galera!' },
      {
        type: 'paragraph',
        content:
          'Intusiastas da música e tech lovers, É com grande satisfação que anuncio a adição mais recente ao meu portfólio de desenvolvimento: uma experiência musical imersiva inspirada na interface do Spotify.',
      },
      { type: 'link', content: '👉 etizel.com', href: 'etizel.com' },
    ],
    publishedAt: new Date('2025-04-07 20:08:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://xsgames.co/randomusers/assets/avatars/male/52.jpg',
      name: 'Etizel Azevedo',
      role: 'Developer Full Stack',
    },
    content: [
      { type: 'paragraph', content: 'Falaaa Galera!' },
      {
        type: 'paragraph',
        content:
          'Intusiastas da música e tech lovers, É com grande satisfação que anuncio a adição mais recente ao meu portfólio de desenvolvimento: uma experiência musical imersiva inspirada na interface do Spotify.',
      },
      { type: 'link', content: '👉 etizel.com', href: 'etizel.com' },
    ],
    publishedAt: new Date('2025-04-07 20:08:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((posts) => {
            return (
              <Post
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
