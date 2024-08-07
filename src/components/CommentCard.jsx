import { useContext, useState } from "react";
import TrashCanRegular from "../assets/trash-can-regular.svg";
import TrashCanSolid from "../assets/trash-can-solid.svg";
import "../css/CommentCard.css";
import netlifyIdentity from 'netlify-identity-widget';
import { deleteComment } from "../api";
import { FakeCommentCard } from "./FakeCommentCard";
import {ErrorComponent} from "./ErrorComponent"

export const CommentCard = ({ comment }) => {
  const [hoverOnDelete, setHoverOnDelete] = useState(TrashCanRegular);
  const [isCommentDeleted, setIsCommentDeleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)
  const user = netlifyIdentity.currentUser();

  const loggedInUser = user === null ? "" : user.user_metadata.full_name
  const hover = () => {
    setHoverOnDelete(TrashCanSolid);
  };
  const notHover = () => {
    setHoverOnDelete(TrashCanRegular);
  };
  const handleDelete = () => {
    setIsLoading(true);
    setError(null)
    deleteComment(comment.comment_id).then(() => {
      setIsCommentDeleted(true)
      setIsLoading(false);
    })
    .catch(({code, message}) => {
      setError({code, message})
      setIsLoading(false)
    });
  };
  if (isLoading) return <FakeCommentCard comment={comment} />;
  else if (isCommentDeleted) return <h5 style={{"margin": "1rem"}}>Comment Deleted</h5>
  else return (
      <div className="comment">
        <div id="comment-info">
          <h5>{comment.author}</h5>
          <p>on {new Date(`${comment.created_at}`).toDateString()}</p>
        </div>
        <p>{comment.body}</p>
        <div id="comment-votes">
          <p>{comment.votes} Votes</p>
        </div>
        {error && <ErrorComponent error={error} />}
        {comment.author === loggedInUser && (
          <input
            type="image"
            id="delete-button"
            onMouseOver={hover}
            onMouseLeave={notHover}
            onClick={handleDelete}
            src={hoverOnDelete}
          />
        )}
      </div>
    );
};

