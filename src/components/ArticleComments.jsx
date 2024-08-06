import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { Loading } from "./Loading";
import { CommentCard } from "./Comment";

export const ArticleComments = ({ article_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState();

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
