import Link from 'next/link';
import styles from '../styles/Article.module.css';

const ArticleItem = ({ article }) => {
  return (
    <Link href='/article/[id]' as={`/article/${article._id}`} className={styles.card}>
      <a className={styles.card}>
        <h3>{article.name} &rarr;</h3>
        <p>{article.ename}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
