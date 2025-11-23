import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../LanguageToggle"; // adjust path if needed
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const isEnglish = i18n.language === "en";

  // Helper function to prefix Odia URLs
const localizedPath = (path: string) => {
  if (isEnglish) {
    return path === "/" ? "/en" : `/en${path}`;
  }
  return path;
};

  return (
    <header className="header">
      <div className="header-container">
        <Link to={localizedPath("/")} className="logo" onClick={() => setMenuOpen(false)}>
          Leelavati
        </Link>

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
              ["Archive", "/archive"],
              ["Subscribe", "/subscribe"],
              ["For Authors", "/for-authors"],
            ].map(([label, path]) => (
              <li key={path}>
                <Link to={localizedPath(path)} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              {/* Language toggle button */}
              <LanguageToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
