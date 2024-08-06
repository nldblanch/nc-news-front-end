import { useState } from "react";
import { postComment } from "../api";
import "../css/PostComment.css";
import { FakeCommentCard } from "./FakeCommentCard";

export const PostComment = ({ article_id, setComments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fakeComment, setFakeComment] = useState();
  const handleSubmit = (event) => {
    setError(null);
    event.preventDefault();
    const comment = event.target[0].value;
    setFakeComment({
      author: "grumpy19",
      body: comment,
      votes: 0,
      created_at: new Date(),
    });
    setIsLoading(true);
    postComment(article_id, { username: "grumpy19", body: comment })
      .then((comment) => {
        setComments((prev) => [comment, ...prev]);
        event.target[0].value = "";
        setIsLoading(false);
      })
  };

  return (
    <>
      <form id="comment-box" onSubmit={handleSubmit}>
        <input placeholder="comment" type="text" />
        <button type="submit">Post</button>
      </form>
      {isLoading && <FakeCommentCard comment={fakeComment} />}
    </>
  );
};
