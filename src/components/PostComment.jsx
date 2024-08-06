import { useContext, useState } from "react";
import { postComment } from "../api";
import "../css/PostComment.css";
import { FakeCommentCard } from "./FakeCommentCard";
import { UserContext } from "../contexts/User";
import { ArticleContext } from "../contexts/ArticleContext";

export const PostComment = ({ setComments }) => {
  const { articleId } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(false);
  const [fakeComment, setFakeComment] = useState();
  const { loggedInUser } = useContext(UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target[0].value;
    setFakeComment({
      author: loggedInUser,
      body: comment,
      votes: 0,
      created_at: new Date(),
    });
    setIsLoading(true);
    postComment(articleId, { username: loggedInUser, body: comment }).then(
      (comment) => {
        setComments((prev) => [comment, ...prev]);
        event.target[0].value = "";
        setIsLoading(false);
      }
    );
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
