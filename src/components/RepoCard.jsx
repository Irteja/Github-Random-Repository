import React from 'react';

const RepoCard = ({ repo }) => {
  if (!repo) return null;

  return (
      <div style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginTop: "20px",
        maxWidth: "500px"
      }}>
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
