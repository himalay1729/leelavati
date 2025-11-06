// src/editors/index.tsx
import React from "react";
import "./editors.css";

type Editor = {
  name: string;
  affiliation: string;
  role: string;
  bio?: string;
  photoUrl?: string; // optional, use initials fallback if not provided
};

const editors: Editor[] = [
  {
    name: "Prof. C K Mohapatra",
    affiliation: "IMA",
    role: "Editor-in-Chief",
    bio: "Research in problem-solving pedagogy, mathematical olympiad training, and geometry education.",
    photoUrl: "/editors/himalaya.jpg",
  },
  {
    name: "Prof. Pratima Panigrahi",
    affiliation: "IIT Kharagpur",
    role: "Editor",
    bio: "Algebraic number theory and history of Indian mathematics.",
    photoUrl: "/editors/himalaya.jpg",
  },
  {
    name: "Prof. Soumyashant Nayak",
    affiliation: "ISI Bangalore",
    role: "Associate Editor",
    bio: "Coordinates submissions, editorial workflow, and student outreach programs.",
    photoUrl: "/editors/himalaya.jpg",
  },
  {
    name: "Dr. Himalaya Senapati",
    affiliation: "AVP, HSBC",
    role: "Associate Editor",
    bio: "Mathematics education research and problem-based learning strategies.",
    photoUrl: "/editors/himalaya.jpg",
  },
  {
    name: "Prof. Anup Dixit",
    affiliation: "IMSc",
    role: "Editorial Advisory Board",
    bio: "History of mathematics with emphasis on South Asian contributions.",
    photoUrl: "/editors/himalaya.jpg",
  },
  {
    name: "Prof. Srinivas K",
    affiliation: "IISER Tirupati",
    role: "Editorial Advisory Board",
    bio: "History of mathematics with emphasis on South Asian contributions.",
    photoUrl: "/editors/himalaya.jpg",
  },
  {
    name: "Dr. Shyam Shundar Agrawal",
    affiliation: "IMSc",
    role: "Editorial Advisory Board",
    bio: "History of mathematics with emphasis on South Asian contributions.",
    photoUrl: "/editors/himalaya.jpg",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const EditorialBoard: React.FC = () => {
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
        {editors.map((ed) => (
          <article className="editor-card" key={ed.name} role="listitem">
            {ed.photoUrl ? (
              <img
                src={ed.photoUrl}
                alt={ed.name}
                className="editor-avatar"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div className="editor-avatar" aria-hidden="true">
                {getInitials(ed.name)}
              </div>
            )}

            <div className="editor-info">
              <div className="editor-name">{ed.name}</div>
              <div className="editor-role">{ed.role}</div>
              <div className="editor-affiliation">{ed.affiliation}</div>
              {ed.bio && <div className="editor-bio">{ed.bio}</div>}
            </div>
          </article>
        ))}
      </div>

      <div className="actions" aria-hidden="false">
        <a className="btn-primary" href="/issues/current">View Current Issue</a>
        <a className="btn-secondary" href="/for-authors">Submission Guidelines</a>
      </div>
    </main>
  );
};

export default EditorialBoard;
