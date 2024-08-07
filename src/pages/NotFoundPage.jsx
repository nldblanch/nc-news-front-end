import { Link } from "react-router-dom";
import ArrowRightSolid from "../assets/arrow-right-solid.svg";
import "../css/NotFoundPage.css"

export const NotFoundPage = () => {
  return (
    <>
    <div className="not-found-page-box" >
          <h2>404</h2>
          <p>Looks like this page doesn't exist yet. You may have mistyped the address, or this page may have moved.</p>
          <div>
            <img src={ArrowRightSolid}></img>
            <Link to="/">Go back to browsing articles</Link>
          </div>
      </div>
    </>
  )
}