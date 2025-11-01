import { Link } from "react-router-dom";
import { useFetchJson } from "../../hooks/useFetchJson";
import './archives.css'

const Archives = () => {
  const { data, loading } = useFetchJson();

  if (loading) return <p className="loading">Loading archives...</p>;
  if (!data) return <p>Error loading data.</p>;

  return (
    <div className="archive-page page-container">
      <h1>Archives</h1>

      {data.volumes.map((volume: any) => (
        <div key={volume.id} className="volume-section">
          <h2>
            {volume.title} ({volume.year})
          </h2>
          <div className="issues-grid">
            {volume.issues.map((issue: any) => (
              <Link
                to={`/issues/${issue.slug}`}
                key={issue.slug}
                className="issue-card"
              >
                <img
                  src={issue.coverImage}
                  alt={issue.title}
                  className="issue-cover"
                />
                <div className="issue-info">
                  <h3>{issue.title}</h3>
                  <p>
                    {issue.month} {issue.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Archives;
