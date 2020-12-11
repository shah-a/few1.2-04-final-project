import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link to={"/"}>
        <img
          className="title"
          src={`${process.env.PUBLIC_URL}/assets/title/title.png`}
          alt="Super Smash Bros. Ultimate"
        />
      </Link>
      <p className="subtitle">The Original 12 Fighters</p>
    </div>
  );
}

export default Header;
