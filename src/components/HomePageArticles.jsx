import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { Loading } from "./Loading";
import { ArticleCard } from "./ArticleCard";
import { ErrorComponent } from "./ErrorComponent";
import { PageSelector } from "./PageSelector";
import { BottomPageSelector } from "./BottomPageSelector";

export const HomePageArticles = ({
  props: {
    topic,
    sort_by,
    order,
    totalCount,
    setTotalCount,
    page,
    setPage,
    limit,
  },
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getArticles({ topic, sort_by, order, p: page, limit })
      .then(({ articles, total_count }) => {
        setArticles(articles);
        setTotalCount(total_count);
        setIsLoading(false);
      })
      .catch(({ message, code }) => {
        // const {status, message} = error.response.data might use this later
        setError({ code, message });
      });
  }, [topic, sort_by, order, page, limit]);
  if (error)
    return (
      <ErrorComponent
        error={error}
        text={`We couldn't find any articles under the topic '${topic}'. Is it spelled correctly?`}
      />
    );
  if (isLoading) return <Loading />;
  else
    return (
      <main className="flex flex-row flex-wrap">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
        <div className="mx-auto mb-6">

        <BottomPageSelector
          page={page}
          totalCount={totalCount}
          limit={limit}
          setPage={setPage}
          />
        </div>
      </main>
    );
};
