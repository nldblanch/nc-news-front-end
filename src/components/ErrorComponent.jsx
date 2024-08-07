import { Link } from "react-router-dom";
import ArrowRightSolid from "../assets/arrow-right-solid.svg";
import "../css/ErrorComponent.css"

export const ErrorComponent = ({ error, text }) => {
  return (
    <>
      {error.code === "ERR_NETWORK" && (
        <div style={{ margin: "1rem" }}>
          <h5>{error.message}</h5>
          <p>
            Sorry but there seems to be an issue processing that. Please check
            your connection and try again in a few moments.
          </p>
        </div>
      )}
      {error.code === "ERR_BAD_REQUEST" && (
        <div className="not-found-box" >
          <h2>404</h2>
          <p>{text}</p>
          <div>
            <img src={ArrowRightSolid}></img>
            <Link to="/">Go back to browsing articles</Link>
          </div>
      </div>)}
    </>
  );
};
