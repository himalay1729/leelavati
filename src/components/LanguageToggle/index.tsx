import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import "./langtoggle.css";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    // sanitize current path (remove leading /en if present)
    const strippedPath = location.pathname.replace(/^\/en(\/|$)/, "/").replace(/^\//, "/");
    const pathWithoutEn = strippedPath === "/" ? "/" : strippedPath.replace(/\/$/, "");
    const search = location.search || "";
    const hash = location.hash || "";

    if (isEnglish) {
      // Going to Odia (default): remove /en, land on "/" if that was the path
      const newPath = pathWithoutEn === "/" ? "/" : pathWithoutEn;
      i18n.changeLanguage("or");
      navigate(`${newPath}${search}${hash}`);
    } else {
      // Going to English: ensure single /en prefix (avoid double /en/en)
      const cleaned = location.pathname.replace(/^\/en/, "");
      const newPath = `/en${cleaned || "/"}`;
      i18n.changeLanguage("en");
      navigate(`${newPath}${search}${hash}`);
    }
  };

  return (
    <button className="lang-toggle" onClick={toggleLanguage}>
      {isEnglish ? "ଓଡିଆକୁ ବଦଳାନ୍ତୁ":"Switch to English"}
    </button>
  );
};

export default LanguageToggle;
