import { useContext, useState } from "react";
import { postComment } from "../api";
import "../css/PostComment.css";
import { FakeCommentCard } from "./FakeCommentCard";
import { UserContext } from "../contexts/User";
import { ArticleContext } from "../contexts/ArticleContext";
import { ErrorComponent } from "./ErrorComponent";

export const PostComment = ({ setComments }) => {
  const { articleId } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(false);
  const [fakeComment, setFakeComment] = useState();
  const [error, setError] = useState(null);
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
    setError(null)
    setIsLoading(true);
    postComment(articleId, { username: loggedInUser, body: comment })
    .then(
      (comment) => {
        setComments((prev) => [comment, ...prev]);
        event.target[0].value = "";
        setIsLoading(false);
      }
    )
    .catch(({code, message}) => {
      setError({code, message})
      setIsLoading(false)
    });
  };

  return (
    <>
    <div>
      <form id="comment-box" onSubmit={handleSubmit}>
        <input placeholder="comment" type="text" required/>
        <button type="submit">Post</button>
      </form>
      {isLoading && <FakeCommentCard comment={fakeComment} />}
      {error && <ErrorComponent error={error} />}
    </div>
    </>
  );
};
