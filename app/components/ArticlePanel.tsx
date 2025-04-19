import { useEffect } from 'react';
import styles from './ArticlePanel.module.css';

interface ArticlePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
}

export default function ArticlePanel({ isOpen, onClose, title, date }: ArticlePanelProps) {
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
            <p>Then it struck me: the flair of filing was still here in Records Management—but it was in the implied aesthetic nature of the filing enterprise; in the alignment of tabs and arrangement of drawers. That pizzazz was to be found, too, in the style of the book itself—in its liberal use of diagrams and illustrations and photographs of state-of-the-art office equipment and fashionably dressed, well-coiffed office ladies.</p>
            
            <div className={styles.imageContainer}>
              <img 
                src="https://placehold.co/600x400" 
                alt="Placeholder" 
                className={styles.image}
              />
              <span className={styles.caption}>This is an image caption</span>
            </div>

            <p>I figured, why not read Records Management against the grain, focusing less on the staid instruction and more on the aesthetic and even ludic nature of filing work? Why not read this textbook as a toy catalogue, or as a set of rules for a Monopoly-esque administrative game?</p>
          </div>
        </article>
      </div>
    </div>
  );
} 