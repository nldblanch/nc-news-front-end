import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { getArticles } from "../api";
import { ArticleCard } from "../components/ArticleCard";
import "../css/Home.css";
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState();
  useEffect(() => {
    setIsLoading(true)
    getArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <Loading />;
  else
    return (
      <>
        <main id="articles">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </main>
      </>
    );
};
