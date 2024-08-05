import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { Loading } from "../components/Loading";
import "../css/Article.css";
import { ArticleComments } from "../components/ArticleComments";

export const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;
  else
    return (
      <main id="article-page">
        <h4>{article.topic}</h4>
        <h2>{article.title}</h2>
        <img src={article.article_img_url}></img>
        <div>
          <h3>{article.author}</h3>
          <p>on {new Date(`${article.created_at}`).toDateString()}</p>
        </div>
        <p>{article.votes} Votes</p>
        <p>{article.body}</p>
        <ArticleComments article_id={article_id} />
      </main>
    );
};
