import Lottie from "lottie-react";
import loadingIcon from "../assets/loading-icon.json"
import "../css/FakeCommentCard.css";
export const FakeCommentCard = ({ comment }) => {
  return (
    <div className="fake-comment">
      <div id="comment-info">
        <h5>{comment.author}</h5>
        <p>on {new Date(`${comment.created_at}`).toDateString()}</p>
      </div>
      <p>{comment.body}</p>
      <div id="comment-votes">
        <p>{comment.votes} Votes</p>
      </div>
      <div className="loading-icon"><Lottie speed={0.5} animationData={loadingIcon} loop={true} /></div>
    </div>
  );
};
