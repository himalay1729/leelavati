import React from "react";
import "./editors.css";
import { useEditors, type Editor } from "../../hooks/useEditors";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const EditorialBoard: React.FC = () => {
  // Pass a custom URL if you host it elsewhere: useEditors("/api/editors")
  const { editors, loading, error } = useEditors();

  if (loading) {
    return (
      <main className="editorial-page page-container" aria-labelledby="editorial-title">
        <h1 id="editorial-title">Editorial Board</h1>
        <p className="lead">Loading editors…</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="editorial-page page-container" aria-labelledby="editorial-title">
        <h1 id="editorial-title">Editorial Board</h1>
        <p className="lead">Failed to load editors: {error}</p>
      </main>
    );
  }

  return (
    <main className="editorial-page page-container" aria-labelledby="editorial-title">
      <h1 id="editorial-title">Editorial Board</h1>

      <p className="lead">
        The editorial board of Leelavati comprises scholars, educators and practitioners
        dedicated to promoting mathematical thinking among students and teachers.
        Below are the current editors, their roles and brief descriptions of their
        expertise or responsibilities.
      </p>

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
        <a className="btn-primary" href="/issues/current">View Current Issue</a>
        <a className="btn-secondary" href="/for-authors">Submission Guidelines</a>
      </div>
    </main>
  );
};

export default EditorialBoard;
