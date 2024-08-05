import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/" id="home-link">
          NC NEWS
        </Link>
      </h1>
    </header>
  );
};
