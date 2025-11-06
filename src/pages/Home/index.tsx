import { Link } from "react-router-dom";
import { useFetchJson } from "../../hooks/useFetchJson";
import "./home.css";

// Utility to convert month string to numeric order
const monthToNum = (month: string) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months.indexOf(month) + 1;
};

const Home = () => {

  const { data, loading } = useFetchJson();

  if (loading) return <p className="loading">Loading current issue...</p>;
  if (!data) return <p>Error loading data.</p>;

  // Flatten all issues across volumes
  const allIssues = data.volumes.flatMap((v: any) =>
    v.issues.map((i: any) => ({
      ...i,
      volumeTitle: v.title
    }))
  );

  // Sort descending by year, then month
  allIssues.sort((a: any, b: any) => {
    if (a.year !== b.year) return b.year - a.year;
    return monthToNum(b.month) - monthToNum(a.month);
  });

  // Pick the most recent one
  const currentIssue = allIssues[0];

  return (
    <section className="home page-container">
      <h1>Welcome to Leelavati</h1>
<p className="tagline">
In the spirit of Bhāskara’s Leelavati -- where every problem tells a story -- a journey through the wonders of mathematics.
</p>

<h1>Current Issue</h1>

{currentIssue ? (
<div className="current-issue-content">

<div className="left">
<img
              src={currentIssue.toc}
              alt={currentIssue.title}
              className="cover-img"
            />
          </div>

<div className="right">
            <img
              src={currentIssue.coverImage}
              alt={currentIssue.title}
              className="cover-img"
            />
          </div>

</div>
      ) : (
        <p>No issues found.</p>
      )}

      <div className="actions">
	  <Link to={`/issues/${currentIssue.slug}`} className="btn-primary">
              Current Issue
            </Link>
        <Link to="/archives" className="btn-secondary">Browse Archives</Link>
      </div>
    </section>
  );
};

export default Home;
