'use client';

import { useEffect } from 'react';
import styles from './ArticlePanel.module.css';
import { ReactNode } from 'react';

interface ArticlePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  content: ReactNode;
}

export default function ArticlePanel({ isOpen, onClose, title, date, content }: ArticlePanelProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div 
      className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
      onClick={onClose}
    >
      <div 
        className={`${styles.panel} ${isOpen ? styles.open : ''}`}
        onClick={e => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <article className={styles.content}>
          <div className={styles.header}>
            <span className={styles.date}>{date}</span>
            <h1 className={styles.title}>{title}</h1>
          </div>
          
          <div className={styles.body}>
            {content}
          </div>
        </article>
      </div>
    </div>
  );
} 