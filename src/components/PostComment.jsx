import { useContext, useState } from "react";
import { postComment } from "../api";
import { FakeCommentCard } from "./FakeCommentCard";

import { ArticleContext } from "../contexts/ArticleContext";
import { ErrorComponent } from "./ErrorComponent";
import netlifyIdentity from "netlify-identity-widget";

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
      netlifyIdentity.open();
    } else {
      const comment = event.target[0].value;
      setFakeComment({
        author: user.user_metadata.full_name,
        body: comment,
        votes: 0,
        created_at: new Date(),
      });
      setError(null);
      setIsLoading(true);
      postComment(articleId, {
        username: user.email,
        body: comment,
      })
        .then((comment) => {
          setComments((prev) => [comment, ...prev]);
          event.target[0].value = "";
          setIsLoading(false);
        })
        .catch(({ code, message }) => {
          setError({ code, message });
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center p-2">
        <form
          id="comment-box"
          className="w-full outline outline-1 outline-slate-400 flex justify-between rounded"
          onSubmit={handleSubmit}
        >
          <input className="ml-2" placeholder="comment" type="text" required />
          <button
            className="rounded bg-slate-200 active:bg-slate-300 py-2 px-4 outline outline-1 outline-slate-400"
            type="submit"
          >
            Post
          </button>
        </form>
        {isLoading && <FakeCommentCard comment={fakeComment} />}
        {error && <ErrorComponent error={error} />}
      </div>
    </>
  );
};
