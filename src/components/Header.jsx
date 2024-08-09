import { Link, useNavigate } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";
import SquarePenSolid from "../assets/square-pen-solid.svg";

export const Header = ({loggedInUser}) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    netlifyIdentity.open();
  };
  const handlePost = () => {
    if (!loggedInUser) {
      netlifyIdentity.open();
    } else {
      navigate("/post");
    }
  };
  
  return (
    <header className=" w-full h-36 fixed top-0 z-40">
      <div className="w-full h-24 bg-red-600 flex flex-col justify-center">
        <h1 className="text-6xl text-white font-bold">
          <Link to="/">NC NEWS</Link>
        </h1>
      </div>
      <nav className="pt-0">
        <ul className="bg-white flex gap-4 px-4 py-2">
          <Link className="my-auto" to="/?topic=coding">
            <li className="border-solid border-b border-slate-500 hover:bg-slate-200 max-sm:text-sm">
              coding
            </li>
          </Link>
          <Link className="my-auto" to="/?topic=football">
            <li className="border-solid border-b border-slate-500 hover:bg-slate-200 max-sm:text-sm">
              football
            </li>
          </Link>
          <Link className="my-auto" to="/?topic=cooking">
            <li className="border-solid border-b border-slate-500 hover:bg-slate-200 max-sm:text-sm">
              cooking
            </li>
          </Link>
          <label
            onClick={handlePost}
            className="ml-auto mr-4 flex items-center hover:bg-slate-200 "
            htmlFor="post-button"
          >
            Post<span className="hidden md:block">&nbsp;an article</span>
            <input
              id="post-button"
              src={SquarePenSolid}
              className="h-8 ml-2"
              type="image"
            />
          </label>
          <div
            className="flex items-center hover:bg-slate-200"
            data-netlify-identity-button
            onClick={handleLogin}
          >
            {!loggedInUser && <div className="flex"><span>Login</span>
            <span className="hidden md:block">&nbsp;with Netlify Identity</span>
            </div>}
            {loggedInUser && <div>{loggedInUser}</div>}
          </div>
        </ul>
      </nav>
    </header>
  );
};
