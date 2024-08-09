import { Link } from "react-router-dom";
import ArrowRightSolid from "../assets/arrow-right-solid.svg";

export const ErrorComponent = ({ error, text }) => {
  return (
    <>
      {error.code === "ERR_NETWORK" && (
        <div className="m-1">
          <h5 className="font-medium">{error.message}</h5>
          <p>
            Sorry but there seems to be an issue processing that. Please check
            your connection and try again in a few moments.
          </p>
        </div>
      )}
      {error.code === "ERR_BAD_REQUEST" && (
        <main className="mt-16 w-full sm:w-1/2 mx-auto flex flex-col items-center">
          <h2 className="text-5xl sm:text-7xl">404</h2>
          <p className="py-2 px-8 text-lg sm:text-2xl">{text}</p>
          <div className="p-2 w-fit flex justify-center bg-slate-200 rounded active:bg-slate-300 mt-8">
            <img className="w-4 sm:w-6 mr-2" src={ArrowRightSolid}></img>
            <Link className="text-base sm:text-xl" to="/">
              Go back to browsing articles
            </Link>
          </div>
        </main>
      )}
    </>
  );
};
