const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map((it) => {
        <h3 key={it.id}>{it.title}</h3>;
      })}
    </div>
  );
};

export default Articles;
