import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { getArticles } from "../api";
import { ArticleCard } from "../components/ArticleCard";
import "../css/Home.css"
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState();
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      console.log(articles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <Loading />;
  else
    return (
      <>
        <div id="articles">
          {articles.map((article) => {
            return <ArticleCard article={article} />;
          })}
        </div>
      </>
    );
};
