import { Link } from "react-router-dom";
import { useFetchJson } from "../../hooks/useFetchJson";
import "./currentissue.css";

// Utility to convert month string to numeric order
const monthToNum = (month: string) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months.indexOf(month) + 1;
};

const CurrentIssue = () => {
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
    <div className="current-issue page-container">
      <h1>Current Issue</h1>
      {currentIssue ? (
        <div className="current-issue-content">
          <div className="left">
            <h2>{currentIssue.title}</h2>
            <p className="meta">
              {currentIssue.month} {currentIssue.year} — {currentIssue.volumeTitle}
            </p>

            <ul>
              {currentIssue.articles.map((a: any) => (
                <li key={a.id}>
                  <strong>{a.title}</strong> <span>by {a.author}</span>
                </li>
              ))}
            </ul>

            <Link to={`/issues/${currentIssue.slug}`} className="view-issue-btn">
              View Full Issue →
            </Link>
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
    </div>
  );
};

export default CurrentIssue;
