import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { Loading } from "../components/Loading";
import "../css/Article.css";
import { VotesBar } from "../components/VotesBar";
import { CommentsSection } from "../components/CommentsSection";
import { ArticleContext } from "../contexts/ArticleContext";
import { ErrorComponent } from "../components/ErrorComponent";

export const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const { setArticleId } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
    .then((article) => {
      setArticle(article);
      setArticleId(article_id);
      setIsLoading(false);
    })
    .catch(({message, code}) => {
      setError({code, message})
    });
  }, []);
  if (error) return <ErrorComponent error={error} text={"Looks like this article doesn't exist yet."} />
  else if (isLoading) return <Loading />;
  else
    return (
      <main id="article-page">
        <div id="article-content">
        <Link to={`/?topic=${article.topic}`}>
        <h4>{article.topic}</h4>
        </Link>
        <h2>{article.title}</h2>
        <img src={article.article_img_url}></img>
        <div id="author-info">
          <h3>{article.author}</h3>
          <p>on {new Date(`${article.created_at}`).toDateString()}</p>
        </div>
        <VotesBar votes={article.votes} />
        <p>{article.body}</p>
        </div>
        <CommentsSection />
      </main>
    );
};
