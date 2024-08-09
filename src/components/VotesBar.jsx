import ThumbsUpRegular from "../assets/thumbs-up-regular.svg";
import ThumbsDownRegular from "../assets/thumbs-down-regular.svg";
import ThumbsUpSolid from "../assets/thumbs-up-solid.svg";
import ThumbsDownSolid from "../assets/thumbs-down-solid.svg";
import { useContext, useState } from "react";
import { postLike } from "../api";
import { ArticleContext } from "../contexts/ArticleContext";
export const VotesBar = ({ votes }) => {
  const { articleId } = useContext(ArticleContext);
  const [thumbsUpChecked, setThumbsUpChecked] = useState(false);
  const [thumbsDownChecked, setThumbsDownChecked] = useState(false);
  const [incrementedVotes, setIncrementedVotes] = useState(0);
  const [error, setError] = useState(null);
  const [initialState, setInitialState] = useState();
  const handleThumbsUp = () => {
    setInitialState({ like: thumbsUpChecked, dislike: thumbsDownChecked });
    setError(null);
    setThumbsUpChecked((prev) => !prev);
    if (thumbsDownChecked) {
      setThumbsDownChecked(false);
      incrementVotes(2);
    } else if (thumbsUpChecked) {
      incrementVotes(-1);
    } else {
      incrementVotes(1);
    }
  };
  const handleThumbsDown = () => {
    setInitialState({ like: thumbsUpChecked, dislike: thumbsDownChecked });
    setError(null);
    setThumbsDownChecked((prev) => !prev);
    if (thumbsUpChecked) {
      setThumbsUpChecked(false);
      incrementVotes(-2);
    } else if (thumbsDownChecked) {
      incrementVotes(1);
    } else {
      incrementVotes(-1);
    }
  };

  const incrementVotes = (increment) => {
    setIncrementedVotes((votes) => votes + increment);
    setError(null);
    postLike(articleId, increment).catch((err) => {
      setThumbsUpChecked(initialState.like);
      setThumbsDownChecked(initialState.dislike);
      setIncrementedVotes((currentVotes) => currentVotes - like);
      setError(err);
    });
  };

  return (
    <>
      <div className="h-8 w-full flex px-2 mt-2 sm:px-4">
        <img
          className="h-full pr-4 active:scale-125"
          onClick={handleThumbsUp}
          src={thumbsUpChecked ? ThumbsUpSolid : ThumbsUpRegular}
        ></img>
        <img
          className="h-full active:scale-125"
          onClick={handleThumbsDown}
          src={thumbsDownChecked ? ThumbsDownSolid : ThumbsDownRegular}
        ></img>
        <p className="ml-auto">{votes + incrementedVotes} Votes</p>
      </div>
      {error && (
        <p style={{ color: "red", fontSize: "1rem" }}>
          Seems like that didn't work. Please try again in a few moments.
        </p>
      )}
    </>
  );
};
