import { useParams } from "react-router-dom";
import { useFetchJson } from "../../hooks/useFetchJson";
import "./issuedetail.css";

const IssueDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, loading } = useFetchJson();

  if (loading) return <p>Loading issue...</p>;
  if (!data) return <p>Error loading data.</p>;

  let selectedIssue = null;
  let volumeTitle = "";

  for (const volume of data.volumes) {
    const found = volume.issues.find((i: any) => i.slug === slug);
    if (found) {
      selectedIssue = found;
      volumeTitle = volume.title;
      break;
    }
  }

  if (!selectedIssue) return <p>Issue not found.</p>;

  return (
    <div className="issue-detail page-container">
      <div className="issue-content">
        <div className="left">
          <h1>{selectedIssue.title}</h1>
          <p className="meta">
            {selectedIssue.month} {selectedIssue.year} — {volumeTitle}
          </p>

          <h1>Articles</h1>
          <ul>
            {selectedIssue.articles.map((a: any) => (
              <li key={a.id}>
                <strong>{a.title}</strong>
                <span>by {a.author}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="right">
          <img
            src={selectedIssue.coverImage}
            alt={selectedIssue.title}
            className="cover-img"
          />
        </div>
      </div>
    </div>
  );
};

export default IssueDetail;
