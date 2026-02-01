const BASE_URL = "https://api.github.com";

export const searchRepositories = async (language) => {
  const query = `language:${language}`;

  const url = `${BASE_URL}/search/repositories?q=${query}&sort=starts&order=desc&per_page=50`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data from github!");
  }

  const data = await response.json();

  console.log(data.items);

  return data.items;
};
