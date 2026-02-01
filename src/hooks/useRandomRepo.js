import { useState } from 'react';
import { searchRepositories } from '../api/githubApi';

export const useRandomRepo = () => {
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomRepo = async (language) => {
    try{
      setLoading(true);
      setError(null);

      const repos = await searchRepositories(language);
      
      if(!repos || repos.length === 0){
        throw new Error("No repositories found");
      }

      const randomIndex = Math.floor(Math.random() * repos.length);

      setRepo(repos[randomIndex]);
    }
    catch(error){
      setError(error.message);
      setRepo(null);
    }finally{
      setLoading(false);
    }
  };

  return { repo, loading, error, getRandomRepo };
};
