import { Link } from "react-router-dom";
import ArrowRightSolid from "../assets/arrow-right-solid.svg";
import "../css/NotFoundPage.css"

export const NotFoundPage = () => {
  return (
    <>
    <main className="mt-40 w-full sm:w-1/2 mx-auto flex flex-col items-center" >
          <h2 className="text-5xl sm:text-7xl">404</h2>
          <p className="py-2 px-8 text-lg sm:text-2xl">Looks like this page doesn't exist yet. You may have mistyped the address, or this page may have moved.</p>
          <div className="p-2 w-fit flex justify-center bg-slate-200 rounded active:bg-slate-300 mt-8">
            <img className="w-4 sm:w-6 mr-2" src={ArrowRightSolid}></img>
            <Link className="text-base sm:text-xl" to="/">Go back to browsing articles</Link>
          </div>
      </main>
    </>
  )
}