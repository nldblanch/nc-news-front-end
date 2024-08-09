import { useContext, useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { Loading } from "./Loading";
import { CommentCard } from "./CommentCard";
import { ArticleContext } from "../contexts/ArticleContext";

export const ArticleComments = ({ comments, setComments}) => {
  const { articleId } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(true);
  const [maxPage, setMaxPage] = useState(1)
  const [page, setPage] = useState(1)
  const [loadingMoreComments, setLoadingMoreComments] = useState(false)
  const [oldComments, setOldComments] = useState()
  const handleClick = () => {
    setLoadingMoreComments(true)
    setOldComments([...comments])
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    setIsLoading(true);
    getArticleComments(articleId, page).then(({comments, total_count}) => {
      setMaxPage(Math.ceil(total_count/10))
      if (page === 1) setComments(comments)
      else setComments(prev => [...prev, ...comments]);
      setIsLoading(false);
      setLoadingMoreComments(false)
    });
  }, [page]);

  if (loadingMoreComments) return (
    <section>
      {oldComments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
          />
        );
      })}
      </section>
      )
  if (isLoading) return <Loading />;
  else
    return (
      <section>
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
            />
          );
        })}
        {maxPage > page && <p className="mb-6 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 w-fit mx-auto px-4 rounded-xl outline outline-1 outline-slate-300" onClick={handleClick}>Load more comments</p>}
      </section>
    );
};
