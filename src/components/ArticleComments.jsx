import { useContext, useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { Loading } from "./Loading";
import { CommentCard } from "./CommentCard";
import { ArticleContext } from "../contexts/ArticleContext";

export const ArticleComments = ({ comments, setComments }) => {
  const { articleId } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleComments(articleId).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;
  else
    return (
      <section>
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              setComments={setComments}
            />
          );
        })}
      </section>
    );
};
