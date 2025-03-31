import { Header } from './components/Header.jsx';
import { Post } from './Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Etizel Azevedo"
            content="Content Default Text.Content Default Text.Content Default Text.Content Default Text."
          />
          <Post
            author="Pierre Juninho"
            content="Content Default Text.Content Default Text.Content Default Text.Content Default Text."
          />
        </main>
      </div>
    </div>
  );
}
