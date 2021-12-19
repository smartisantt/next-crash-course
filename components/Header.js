import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>
      <p>keep up to date with the lateset web dev news</p>
    </div>
  );
};

export default Header;
