'use client';

import { useState } from 'react';
import styles from './page.module.css'
import ArticlePanel from './components/ArticlePanel';

const posts = [
  { id: 1, title: 'This is the title of the blog post', date: '17.04' },
  { id: 2, title: 'This is the title of the blog post', date: '17.04' },
  { id: 3, title: 'This is the title of the blog post', date: '17.04' },
  // Add more posts as needed
]

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <main>
      <div className={styles.posts}>
        {posts.map(post => (
          <article 
            key={post.id} 
            className={styles.post}
            onClick={() => setSelectedPost(post)}
          >
            <span className={styles.date}>{post.date}</span>
            <h2 className={styles.title}>{post.title}</h2>
          </article>
        ))}
      </div>
      
      <footer className={styles.footer}>
        <div className={styles.left}>
          <div className={styles.inventory}>inventory</div>
          <div className={styles.name}>michael zimmermann</div>
        </div>
        <div className={styles.right}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
        </div>
      </footer>

      <ArticlePanel
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title || ''}
        date={selectedPost?.date || ''}
      />
    </main>
  )
} 