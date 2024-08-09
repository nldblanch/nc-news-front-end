import ThumbsUpRegular from "../assets/thumbs-up-regular.svg";
import ThumbsDownRegular from "../assets/thumbs-down-regular.svg";
import ThumbsUpSolid from "../assets/thumbs-up-solid.svg";
import ThumbsDownSolid from "../assets/thumbs-down-solid.svg";
import { useEffect, useState } from "react";
import { postLikeToComment } from "../api";
export const VotesBarComments = ({ votes, commentId }) => {
  
  const [thumbsUpChecked, setThumbsUpChecked] = useState(false);
  const [thumbsDownChecked, setThumbsDownChecked] = useState(false);
  const [incrementedVotes, setIncrementedVotes] = useState(0);
  const [error, setError] = useState(null);
  const [initialState, setInitialState] = useState();
  const [currentIncrement, setCurrentIncrement] = useState(0)

  const handleThumbsUp = () => {
    setInitialState({ like: thumbsUpChecked, dislike: thumbsDownChecked });
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
    setCurrentIncrement(increment)
  };
  useEffect(() => {
    setError(null);
    postLikeToComment(commentId, currentIncrement).catch((err) => {
      setThumbsUpChecked(initialState.like);
      setThumbsDownChecked(initialState.dislike);
      setIncrementedVotes((currentVotes) => currentVotes - currentIncrement);
      setError(err);
    });
  }, [initialState])
  return (
    <>
      <div className="h-8 w-full flex px-2 mt-2 sm:px-4 items-center">
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
        <p className="ml-4">{votes + incrementedVotes} Votes</p>
      </div>
      {error && (
        <p className="text-red-600 text-sm" >
          Seems like that didn't work. Please try again in a few moments.
        </p>
      )}
    </>
  );
};
