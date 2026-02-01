import '../styles/RepoCard.css';

const RepoCard = ({ repo }) => {
  if (!repo) return null;

  return (
      <div className="repo-card">
        <h2>{repo.full_name}</h2>

        <p>{repo.description || "No description available"}</p>

        <p>⭐ Stars: {repo.stargazers_count}</p>

        <a href={repo.html_url} target="_blank" rel="noreferrer">
          View Repository
        </a>
    </div>
  );
};

export default RepoCard;
