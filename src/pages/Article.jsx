import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById, getUserByUsername } from "../api";
import { Loading } from "../components/Loading";
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
  const [articleAuthor, setArticleAuthor] = useState()
  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setArticleId(article_id);
        return getUserByUsername(article.author)
      })
      .then((user) => {
        setArticleAuthor(user.name)
        setIsLoading(false);
      })
      .catch(({ message, code }) => {
        setError({ code, message });
      });
  }, []);
  if (error)
    return (
      <ErrorComponent
        error={error}
        text={"Looks like this article doesn't exist yet."}
      />
    );
  else if (isLoading) return <Loading />;
  else
    return (
      <main className="mt-36 lg:flex">
        <div className="w-full lg:w-7/12 2xl:">
          <Link to={`/?topic=${article.topic}`}>
            <h4 className="text-left pl-2 text-xl font-medium">
              {article.topic}
            </h4>
          </Link>
          <h2 className="text-3xl font-bold mb-2 ml-2 text-left">
            {article.title}
          </h2>
          <img
            className="w-full aspect-square object-cover mb-2 sm:aspect-video lg:aspect-square xl:aspect-video "
            src={article.article_img_url}
          ></img>
          <div className="flex justify-between px-2 sm:px-4">
            <h3 className="text-xl font-medium">{articleAuthor}</h3>
            <p>on {new Date(`${article.created_at}`).toDateString()}</p>
          </div>
          <VotesBar votes={article.votes} />
          <p className="text-left p-2 sm:text-xl sm:px-4">{article.body}</p>
        </div>
        <CommentsSection />
      </main>
    );
};
