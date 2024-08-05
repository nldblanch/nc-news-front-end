import "../css/ArticleCard.css";
export const ArticleCard = ({ article }) => {
  const date = new Date(`${article.created_at}`);

  return (
    <section className="article-card">
      <img src={article.article_img_url}></img>
      <h2>{article.title}</h2>
      <div className="article-card-info">
        <div className="author-info">
          <p>{article.author}</p>
          <p>Published: {date.toDateString()}</p>
        </div>
        <div className="article-info">
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
        </div>
      </div>
    </section>
  );
};
