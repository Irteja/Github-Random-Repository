import React, { useState } from 'react';
import '../styles/home.css';
import { useRandomRepo } from '../hooks/useRandomRepo';
import LanguageDropdown from '../components/LanguageDropdown';
import SearchButton from '../components/SearchButton';
import RepoCard from '../components/RepoCard';

const Home = () => {
  const [language,setLanguage] = useState("");

  const {
    repo,
    loading,
    error,
    getRandomRepo
  } = useRandomRepo();

  function handleSearch(){
    if(!language) return;
    getRandomRepo(language);
  }

  return (
    <div className="home-container">
      <h1>GitHub Random Repo Finder</h1>
      <LanguageDropdown value={language} onChange={setLanguage} />

      <div style={{ marginTop: "10px" }}>
        <SearchButton
          onClick={handleSearch}
          loading={loading}
          disabled={!language}
        />
      </div>

      {loading && <p>Loading repository...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {repo && <RepoCard repo={repo} />}

    </div>
  );
};

export default Home;
