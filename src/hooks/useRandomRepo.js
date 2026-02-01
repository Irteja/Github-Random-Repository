import { useState } from 'react';

export const useRandomRepo = () => {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomRepo = async (language) => {
    // Hook implementation
  };

  return { repo, loading, error, getRandomRepo };
};
