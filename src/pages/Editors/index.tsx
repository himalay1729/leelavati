import React from "react";
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

const EditorialBoard: React.FC = () => {
  const { editors, loading, error } = useEditors();
  const { t } = useTranslation();

  if (loading) {
    return (
      <main className="editorial-page page-container" aria-labelledby="editorial-title">
        <h1 id="editorial-title">{t("editors.title")}</h1>
        <p className="lead">{t("common.loading")}</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="editorial-page page-container" aria-labelledby="editorial-title">
        <h1 id="editorial-title">{t("editors.title")}</h1>
        <p className="lead">{t("common.errorLoadingEditors", { error })}</p>
      </main>
    );
  }

  return (
    <main className="editorial-page page-container" aria-labelledby="editorial-title">
      <h1 id="editorial-title">{t("editors.title")}</h1>

      <p className="lead">{t("editors.description")}</p>

      <div className="editor-grid" role="list">
        {editors.map((ed: Editor) => (
          <article className="editor-card" key={ed.name} role="listitem">
            {ed.photoUrl ? (
              <img
                src={ed.photoUrl}
                alt={ed.name}
                className="editor-avatar"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            ) : (
              <div className="editor-avatar" aria-hidden="true">
                {getInitials(ed.name)}
              </div>
            )}

            <div className="editor-info">
              <div className="editor-name" title={ed.name}>{ed.name}</div>
              <div className="editor-role">{ed.role}</div>
              <div className="editor-affiliation">{ed.affiliation}</div>
              {ed.bio && <div className="editor-bio">{ed.bio}</div>}
            </div>
          </article>
        ))}
      </div>

      <div className="actions" aria-hidden={false}>
        <a className="btn-primary" href="/issues/current">
          {t("editors.viewCurrentIssue")}
        </a>
        <a className="btn-secondary" href="/for-authors">
          {t("editors.submissionGuidelines")}
        </a>
      </div>
    </main>
  );
};

export default EditorialBoard;
