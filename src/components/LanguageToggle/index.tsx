import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isOdia = i18n.language === "or";

  const toggleLanguage = () => {
    const newLang = isOdia ? "en" : "or";
    i18n.changeLanguage(newLang);

    // Update URL path
    const newPath = isOdia
      ? location.pathname.replace("/or", "") // remove '/or' for English
      : `/or${location.pathname}`; // add '/or' for Odia

    navigate(newPath);
  };

  return (
    <button onClick={toggleLanguage}>
      {isOdia ? "Switch to English" : "ଓଡିଆକୁ ବଦଳାନ୍ତୁ"}
    </button>
  );
};

export default LanguageToggle;
