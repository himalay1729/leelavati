import React from "react";
import "./policies.css";
import { useTranslation } from "react-i18next";

const Policies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container policies-page">
      <h1>{t("policies.title")}</h1>

      <section>
        <h2>{t("policies.privacyTitle")}</h2>
        <p>{t("policies.privacyText")}</p>
      </section>

      <section>
        <h2>{t("policies.editorialTitle")}</h2>
        <p>{t("policies.editorialText")}</p>
      </section>
    </div>
  );
};

export default Policies;
