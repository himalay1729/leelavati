import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <section className="home page-container">
      <h1>Welcome to EduMag</h1>
      <p className="tagline">
        A bi-annual academic magazine sharing insights, research, and discussions on education and technology.
      </p>
      <div className="actions">
        <Link to="/current-issue" className="btn-primary">View Current Issue</Link>
        <Link to="/archives" className="btn-secondary">Browse Archives</Link>
      </div>
    </section>
  );
};

export default Home;
