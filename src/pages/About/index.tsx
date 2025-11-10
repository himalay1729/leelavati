import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import "./editors.css";
import { useEditors, type Editor } from "../../hooks/useEditors";
import { useTranslation } from "react-i18next";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const About: React.FC = () => {
  const { editors, loading, error } = useEditors();
  const { t } = useTranslation();

  return (
    <section className="about-page page-container">
      <h1>{t("about.title")}</h1>

      <p className="left-align">{t("about.intro1")}</p>
      <p className="left-align">{t("about.intro2")}</p>

      <div className="actions">
        <Link to="/current-issue" className="btn-primary">
          {t("about.viewCurrentIssue")}
        </Link>
        <Link to="/archives" className="btn-secondary">
          {t("about.browseArchives")}
        </Link>
      </div>

      <section
        className="about-editorial editorial-page"
        aria-labelledby="editors-title"
        style={{ marginTop: "2rem" }}
      >
        <h2 id="editors-title">{t("about.editorialBoardTitle")}</h2>

        <p className="lead">{t("about.editorialBoardDescription")}</p>

        {loading ? (
          <p>{t("common.loading")}</p>
        ) : error ? (
          <p style={{ color: "crimson" }}>
            {t("common.errorLoadingEditors", { error })}
          </p>
        ) : (
          <>
            <div
              className="editor-grid"
              role="list"
              aria-label={t("about.editorialBoardAriaLabel")}
            >
              {editors.map((ed: Editor) => (
                <article className="editor-card" role="listitem" key={ed.name}>
                  {ed.photoUrl ? (
                    <img
                      src={ed.photoUrl}
                      alt={ed.name}
                      className="editor-avatar"
                      loading="lazy"
                      width={56}
                      height={56}
                    />
                  ) : (
                    <div className="editor-avatar" aria-hidden="true">
                      {getInitials(ed.name)}
                    </div>
                  )}

                  <div className="editor-info">
                    <div className="editor-name" title={ed.name}>
                      {ed.name}
                    </div>
                    <div className="editor-role">{ed.role}</div>
                    <div className="editor-affiliation">{ed.affiliation}</div>
                    {ed.bio && <div className="editor-bio">{ed.bio}</div>}
                  </div>
                </article>
              ))}
            </div>

            <div className="actions" aria-hidden={false}>
              <a className="btn-primary" href="/for-authors">
                {t("about.submissionGuidelines")}
              </a>
            </div>
          </>
        )}
      </section>

      <h1>{t("about.historyTitle")}</h1>

      <p className="left-align">{t("about.history1")}</p>
      <p className="left-align">{t("about.history2")}</p>
    </section>
  );
};

export default About;
