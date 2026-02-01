import React from 'react';

const SearchButton = ({ onClick, loading, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled || loading}>
      {loading ? 'Searching...' : 'Find Random Repo'}
    </button>
  );
};

export default SearchButton;
