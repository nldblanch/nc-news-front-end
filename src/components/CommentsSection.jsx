import { useState } from "react";
import { ArticleComments } from "./ArticleComments";
import { PostComment } from "./PostComment";

export const CommentsSection = () => {
  const [comments, setComments] = useState();
  return (
    <>
      <PostComment setComments={setComments} />
      <ArticleComments comments={comments} setComments={setComments} />
    </>
  );
};
