import { Link } from "react-router-dom";
import "../css/ArticleCard.css";

export const ArticleCard = ({ article }) => {
  const date = new Date(`${article.created_at}`);

  return (
    <Link to={`/articles/${article.article_id}`}>
      <section className="article-card">
        <img src={article.article_img_url}></img>
        <div className="article-card-info">
        <h2>{article.title}</h2>
          <div className="author-info">
            <p>{article.author}</p>
            <p>{date.toDateString()}</p>
          </div>
          <div className="article-info">
            <p>{article.votes} Votes</p>
            <p>{article.comment_count} Comments</p>
          </div>
        </div>
      </section>
    </Link>
  );
};
