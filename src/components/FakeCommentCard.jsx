import Lottie from "lottie-react";
import loadingIcon from "../assets/loading-icon.json";
export const FakeCommentCard = ({ comment }) => {
  return (
    <div className="outline outline-1 outline-slate-200 mx-2 my-4 p-2 shadow-lg bg-slate-50 opacity-50 w-full relative">
      <div className="flex justify-between">
        <h5 className="text-lg font-medium">{comment.author}</h5>
        <p>on {new Date(`${comment.created_at}`).toDateString()}</p>
      </div>
      <p className="text-left">{comment.body}</p>
      <div className="w-full">
        <p className="text-left">{comment.votes} Votes</p>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Lottie speed={0.5} animationData={loadingIcon} loop={true} />
      </div>
    </div>
  );
};
