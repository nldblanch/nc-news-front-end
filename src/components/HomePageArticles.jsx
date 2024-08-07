import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Loading } from "./Loading";
import { ArticleCard } from "./ArticleCard";

export const HomePageArticles = ({
  props: { topic, sort_by, order, setTotalCount },
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState();

  useEffect(() => {
    setIsLoading(true);

    getArticles({ topic, sort_by, order }).then(({ articles, total_count }) => {
      setArticles(articles);
      setTotalCount(total_count);
      setIsLoading(false);
    });
  }, [topic, sort_by, order]);

  if (isLoading) return <Loading />;
  else
    return (
      <>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </>
    );
};
