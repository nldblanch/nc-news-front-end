import { Link } from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget'
export const Header = () => {
  const handleClick = () => {
    netlifyIdentity.open()
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
          <div className="login" data-netlify-identity-button onClick={handleClick}>Login with Netlify Identity</div>
        </ul>
      </nav>
    </header>
  );
};
