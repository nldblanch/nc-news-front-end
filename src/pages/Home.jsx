import {useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { getArticles } from "../api";
import { ArticleCard } from "../components/ArticleCard";
import "../css/Home.css";
import { useSearchParams } from "react-router-dom";
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState();
  const [searchParams] = useSearchParams()
  useEffect(() => {
    setIsLoading(true)
    const topic = (searchParams.get("topic"));
    getArticles({topic}).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [searchParams]);
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
