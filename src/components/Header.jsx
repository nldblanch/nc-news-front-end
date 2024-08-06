import { Link } from "react-router-dom";

export const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};
