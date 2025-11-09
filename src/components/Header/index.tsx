import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">Leelavati</Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            {[
              ["About", "/about"],
              ["Archives", "/archives"],
              ["Subscribe", "/subscribe"],        
              ["For Authors", "/for-authors"],
            ].map(([label, path]) => (
              <li key={path}>
                <Link to={path} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
