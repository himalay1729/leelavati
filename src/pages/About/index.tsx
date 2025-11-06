import { Link } from "react-router-dom";
import "./about.css";

const About = () => (
  <section className="about-page page-container">
    <h1>Welcome to Leelavati</h1>
<p className="left-align">
Mathematics is not just a collection of formulas—it is a way of thinking, a language for patterns, and a bridge between imagination and logic. Leelavati invites you to explore this world in all its depth and delight. Through stories of great mathematicians, explorations of ancient and modern ideas, and engaging problems that spark curiosity, we aim to bring mathematics to life for students and teachers alike. Whether you are discovering the elegance of geometry for the first time, tracing the history of numbers through time, or puzzling over a clever problem, Leelavati is your companion in learning and wonder.
</p>

<p className="left-align">
Come read, think, and play with ideas. Let the spirit of curiosity guide you—just as it has guided mathematicians for centuries.
</p>

<div className="actions">
        <Link to="/current-issue" className="btn-primary">View Current Issue</Link>
        <Link to="/archives" className="btn-secondary">Browse Archives</Link>
      </div>

  </section>
);

export default About;
