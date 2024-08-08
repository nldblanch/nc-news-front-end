import { Link } from "react-router-dom";
import "../css/ArticleCard.css";

export const ArticleCard = ({ article }) => {
  const date = new Date(`${article.created_at}`);

  return (
    <Link className="w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4" to={`/articles/${article.article_id}`}>
      <section className="m-4 outline outline-slate-500 hover:outline-1 shadow hover:shadow-lg">
        <img className="w-full aspect-square object-cover" src={article.article_img_url}></img>
        <div className="flex flex-row flex-wrap p-2">
          <h2 className="text-base font-semibold text-left w-full mb-2 text-xl">{article.title}</h2>
          <div className="text-left">
            <p className="text-sm">{article.author}</p>
            <p className="text-sm">{date.toDateString()}</p>
          </div>
          <div className="text-right grow mt-auto">
            <p className="text-xs">{article.votes} Votes</p>
            <p className="text-xs">{article.comment_count} Comments</p>
          </div>
        </div>
      </section>
    </Link>
  );
};
