import { Link, useNavigate } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";
import SquarePenSolid from "../assets/square-pen-solid.svg";
import "../css/Header.css";
export const Header = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    netlifyIdentity.open();
  };
  const handlePost = () => {
    const user = netlifyIdentity.currentUser();
    if (!user) {
      netlifyIdentity.open()
    } else {
      navigate("/post")
    }
  }
  return (
    <header>
      <h1>
        <Link to="/" id="home-link">
          NC NEWS
        </Link>
      </h1>
      <nav id="nav-bar">
        <ul>
          <Link to="/?topic=coding">
            <li className="nav-element">coding</li>
          </Link>
          <Link to="/?topic=football">
            <li className="nav-element">football</li>
          </Link>
          <Link to="/?topic=cooking">
            <li className="nav-element">cooking</li>
          </Link>
          <label id="post-article" htmlFor="post-button">
            Post an article
            <input src={SquarePenSolid} id="post-button" type="image" onClick={handlePost} />
          </label>
          <div
            className="login"
            data-netlify-identity-button
            onClick={handleLogin}
          >
            Login with Netlify Identity
          </div>
        </ul>
      </nav>
    </header>
  );
};
