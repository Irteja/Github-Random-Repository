import React from 'react';

const SearchButton = ({ onClick, loading }) => {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? 'Searching...' : 'Find Random Repo'}
    </button>
  );
};

export default SearchButton;
