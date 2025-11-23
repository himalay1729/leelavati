import React from "react";
import "./forauthors.css";
import { useTranslation } from "react-i18next";

const ForAuthors: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container authors-page">

      <section className="section contact">
        <h3>{t("forAuthors.submissionTitle")}</h3>
        <p>{t("forAuthors.submissionInstruction")}</p>
      </section>

      <section className="section">
        <h2>{t("forAuthors.scopeTitle")}</h2>
        <p>{t("forAuthors.scopeDescription")}</p>
        <ul className="guidelines">
          <li>{t("forAuthors.guidelines.length")}</li>
          <li>{t("forAuthors.guidelines.resources")}</li>
          <li>{t("forAuthors.guidelines.originality")}</li>
        </ul>
      </section>

      <section className="section">
        <h2>{t("forAuthors.latexTitle")}</h2>
        <p>{t("forAuthors.latexIntro")}</p>
        <p>
          <a
            href="https://github.com/leelavati-ocmse/latex"
            className="btn-link"
            title="Download Leelavati LaTeX style file"
          >
            Download leelavati style file folder
          </a> </p>
         <p>{t("forAuthors.styNote")}</p>
      </section>

      <section className="section">
       <p> {t("forAuthors.odiaTypeIntro")} </p>
        <p>
          <a href="/odia_typing/index.html" className="btn-secondary">
            Odia Typing Tool
          </a>
        </p>
      </section>
    </div>
  );
};

export default ForAuthors;