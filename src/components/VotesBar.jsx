import ThumbsUpRegular from "../assets/thumbs-up-regular.svg";
import ThumbsDownRegular from "../assets/thumbs-down-regular.svg";
import ThumbsUpSolid from "../assets/thumbs-up-solid.svg";
import ThumbsDownSolid from "../assets/thumbs-down-solid.svg";
import "../css/VotesBar.css";
import { useState } from "react";
import { postLike } from "../api";
export const VotesBar = ({ votes, article_id }) => {
    const [thumbsUpChecked, setThumbsUpChecked] = useState(false)
    const [thumbsDownChecked, setThumbsDownChecked] = useState(false)
    const [incrementedVotes, setIncrementedVotes] = useState(0)
    const [error, setError] = useState(null);
    const handleThumbsUp = () => {
        setThumbsUpChecked(prev => !prev)
        if (thumbsDownChecked) {
            setThumbsDownChecked(false)
            setIncrementedVotes(votes => votes + 2)
            incrementVotes(2)
        }
        else if (thumbsUpChecked) {
            setIncrementedVotes(votes => votes - 1)
            incrementVotes(-1)
        } else {
            setIncrementedVotes(votes => votes + 1)
            incrementVotes(1)
        }
        
    }
    const handleThumbsDown = () => {
        setThumbsDownChecked(prev => !prev)
        if (thumbsUpChecked) {
            setThumbsUpChecked(false)
            setIncrementedVotes(votes => votes - 2)
            incrementVotes(-2)
        }
        else if (thumbsDownChecked) {
            setIncrementedVotes(votes => votes + 1)
            incrementVotes(1)
        } else {
            setIncrementedVotes(votes => votes - 1)
            incrementVotes(-1)
        }
    }

    const incrementVotes = (like) => {
        setError(null);
        postLike(article_id, like).catch((err) => {
            setIncrementedVotes((currentVotes) => currentVotes - like);
            setError("Unsuccessful. Please try again!");
        })
    }

  return (
    <div className="votes-bar">
      
      <img className="votes-icon" onClick={handleThumbsUp} src={thumbsUpChecked ? ThumbsUpSolid : ThumbsUpRegular}></img>
      <img className="votes-icon" onClick={handleThumbsDown} src={thumbsDownChecked ? ThumbsDownSolid : ThumbsDownRegular}></img>
      <p className="votes-count">{votes + incrementedVotes} Votes</p>
    </div>
  );
};
