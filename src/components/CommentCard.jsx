import "../css/CommentCard.css";
export const CommentCard = ({ comment }) => {
  return (
    <div className="comment">
      <div id="comment-info">
        <h5>{comment.author}</h5>
        <p>on {new Date(`${comment.created_at}`).toDateString()}</p>
      </div>
      <p>{comment.body}</p>
      <div id="comment-votes">
        <p>{comment.votes} Votes</p>
      </div>
    </div>
  );
};
