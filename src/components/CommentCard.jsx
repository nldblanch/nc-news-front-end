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
  else if (isCommentDeleted) return <h5 className="text-left m-2"><em>Comment Deleted</em></h5>
  else return (
      <div className="outline outline-1 outline-slate-200 mx-2 my-4 p-2 shadow-lg relative z-0">
        <div className="flex justify-between">
          <h5 className="text-lg font-medium">{comment.author}</h5>
          <p>on {new Date(`${comment.created_at}`).toDateString()}</p>
        </div>
        <p className="text-left">{comment.body}</p>
        <div className="w-full">
          <p className="text-left">{comment.votes} Votes</p>
        </div>
        {error && <ErrorComponent error={error} />}
        {comment.author === loggedInUser && (
          <input
            type="image"
            className="w-4 absolute bottom-0 right-0 -translate-x-1/2 -translate-y-1/2"
            onMouseOver={hover}
            onMouseLeave={notHover}
            onClick={handleDelete}
            src={hoverOnDelete}
          />
        )}
      </div>
    );
};

