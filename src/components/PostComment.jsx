import { useContext, useState } from "react";
import { postComment } from "../api";
import "../css/PostComment.css";
import { FakeCommentCard } from "./FakeCommentCard";

import { ArticleContext } from "../contexts/ArticleContext";
import { ErrorComponent } from "./ErrorComponent";
import netlifyIdentity from 'netlify-identity-widget';

  
export const PostComment = ({ setComments }) => {
  const { articleId } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(false);
  const [fakeComment, setFakeComment] = useState();
  const [error, setError] = useState(null);
  
  
  // const { loggedInUser } = useContext(UserContext);
  const handleSubmit = (event) => {
    const user = netlifyIdentity.currentUser();
    event.preventDefault();
    if (user === null) {
      netlifyIdentity.open()
    } else {
      const comment = event.target[0].value;
      setFakeComment({
        author: user.user_metadata.full_name,
        body: comment,
        votes: 0,
        created_at: new Date(),
      });
      setError(null)
      setIsLoading(true);
      postComment(articleId, { username: user.user_metadata.full_name, body: comment })
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
    }
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
