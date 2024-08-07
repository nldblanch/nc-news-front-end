import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { Loading } from "../components/Loading";
import "../css/Article.css";
import { ArticleComments } from "../components/ArticleComments";
import { VotesBar } from "../components/VotesBar";
import { PostComment } from "../components/PostComment";
import { CommentsSection } from "../components/CommentsSection";
import { ArticleContext, ArticleProvider } from "../contexts/ArticleContext";

export const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const { articleId, setArticleId } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setArticleId(article_id);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;
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
