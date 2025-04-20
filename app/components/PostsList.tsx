'use client';

import { useState } from 'react';
import styles from '../page.module.css';
import { type Post } from '@/lib/posts';
import ArticlePanel from './ArticlePanel';

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <>
      <div className={styles.posts}>
        {posts.map((post, index) => (
          <article 
            key={index} 
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
        content={selectedPost?.content || ''}
      />
    </>
  );
} 