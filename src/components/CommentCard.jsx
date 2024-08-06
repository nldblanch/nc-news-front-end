import { useContext, useState } from "react";
import TrashCanRegular from "../assets/trash-can-regular.svg";
import TrashCanSolid from "../assets/trash-can-solid.svg";
import "../css/CommentCard.css";
import { UserContext } from "../contexts/User";
import { deleteComment, getArticleComments } from "../api";
import { FakeCommentCard } from "./FakeCommentCard";
export const CommentCard = ({ comment, setComments, article_id }) => {
  const [hoverOnDelete, setHoverOnDelete] = useState(TrashCanRegular)
  const [isLoading, setIsLoading] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const hover = () => {
    setHoverOnDelete(TrashCanSolid)
  }
  const notHover = () => {
    setHoverOnDelete(TrashCanRegular)
  }
  const handleDelete = () => {
    setIsLoading(true)
    deleteComment(comment.comment_id)
    .then(() => {
      getArticleComments(article_id)
      .then((comments) => {
        setComments(comments)
        setIsLoading(false)
      })
    })
  }
  if (isLoading) return <FakeCommentCard comment={comment} />
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
      {comment.author === loggedInUser && <input type="image" id="delete-button" onMouseOver={hover} onMouseLeave={notHover} onClick={handleDelete} src={hoverOnDelete} />}
    </div>
  );
};
