import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { Loading } from "./Loading";
import { CommentCard } from "./CommentCard";

export const ArticleComments = ({ article_id, comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(true);
  

    useEffect(() => {
      setIsLoading(true)
      getArticleComments(article_id)
      .then((comments) => {
        setComments(comments)
        setIsLoading(false)
      })
    }, [])

  if (isLoading) return <Loading />;
  else return (

    <section id="comments-section">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />
        })}
    </section>
  );
};
