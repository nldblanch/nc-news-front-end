import { useState } from "react";
import { ArticleComments } from "./ArticleComments";
import { PostComment } from "./PostComment";

export const CommentsSection = () => {
  const [comments, setComments] = useState();
  return (
    <div className="lg:w-5/12 lg:mt-16">
      <PostComment setComments={setComments} />
      <ArticleComments comments={comments} setComments={setComments} />
    </div>
  );
};
