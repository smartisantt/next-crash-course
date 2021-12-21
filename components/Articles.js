import styles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const Articles = ({ articles }) => {
  console.log(articles);
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article._id} article={article } />
      ))}
    </div>
  );
};

export default Articles;
