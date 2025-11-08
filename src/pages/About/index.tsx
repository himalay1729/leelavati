// src/pages/about/index.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import "./editors.css";
import { useEditors, type Editor } from "../../hooks/useEditors";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const About: React.FC = () => {
  // Fetch editors from /data/editors.json or your API
  const { editors, loading, error } = useEditors();

  return (
    <section className="about-page page-container">
      <h1>Welcome to Leelavati</h1>

      <p className="left-align">
        Mathematics is not just a collection of formulas—it is a way of thinking, a
        language for patterns, and a bridge between imagination and logic. Leelavati
        invites you to explore this world in all its depth and delight. Through
        stories of great mathematicians, explorations of ancient and modern ideas,
        and engaging problems that spark curiosity, we aim to bring mathematics to
        life for students and teachers alike. Whether you are discovering the
        elegance of geometry for the first time, tracing the history of numbers
        through time, or puzzling over a clever problem, Leelavati is your
        companion in learning and wonder.
      </p>

      <p className="left-align">
        Come read, think, and play with ideas. Let the spirit of curiosity guide
        you—just as it has guided mathematicians for centuries.
      </p>


      <div className="actions">
        <Link to="/current-issue" className="btn-primary">
          View Current Issue
        </Link>
        <Link to="/archives" className="btn-secondary">
          Browse Archives
        </Link>
      </div>

      <section
        className="about-editorial editorial-page"
        aria-labelledby="editors-title"
        style={{ marginTop: "2rem" }}
      >
        <h2 id="editors-title">Editorial Board</h2>

        <p className="lead">
          The editorial board curates content, guides editorial policy, and supports
          our mission to foster mathematical thinking in students and teachers.
        </p>

        {loading ? (
          <p>Loading editors…</p>
        ) : error ? (
          <p style={{ color: "crimson" }}>Failed to load editors: {error}</p>
        ) : (
          <>
            <div className="editor-grid" role="list" aria-label="Editorial board members">
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
        <a className="btn-primary" href="/for-authors">Submission Guidelines</a>
        </div>
          </>
        )}
      </section>

      <h1>A brief history of Leelavati</h1>

      <p className="left-align">
        Mathematics is not just a collection of formulas—it is a way of thinking, a
        language for patterns, and a bridge between imagination and logic. Leelavati
        invites you to explore this world in all its depth and delight. Through
        stories of great mathematicians, explorations of ancient and modern ideas,
        and engaging problems that spark curiosity, we aim to bring mathematics to
        life for students and teachers alike. Whether you are discovering the
        elegance of geometry for the first time, tracing the history of numbers
        through time, or puzzling over a clever problem, Leelavati is your
        companion in learning and wonder.
      </p>

      <p className="left-align">
        Come read, think, and play with ideas. Let the spirit of curiosity guide
        you—just as it has guided mathematicians for centuries.
      </p>
    </section>
  );
};

export default About;
