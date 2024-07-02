import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Episodes({ favorites, setFavorites }) {
  const { seasonId } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${seasonId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const seasons = data.seasons;
        const allEpisodes = seasons.flatMap((season) => season.episodes);
        setEpisodes(allEpisodes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching episodes:", error);
        setError(error);
        setLoading(false);
      });
  }, [seasonId]);

  const toggleFavorite = (episode) => {
    const isFavorited = favorites.some((fav) => fav.episode === episode.episode);
    const updatedFavorites = isFavorited
      ? favorites.filter((fav) => fav.episode !== episode.episode)
      : [...favorites, episode];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Episodes</h2>
      {episodes.length > 0 ? (
        <ul>
          {episodes.map((episode) => (
            <li key={episode.episode} className="episode-card">
              <h3>{episode.title}</h3>
              <p>{episode.description}</p>
              <p>Last updated: {new Date(episode.pubDate).toLocaleDateString()}</p>
              <audio controls>
                <source src={episode.file} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <button onClick={() => toggleFavorite(episode)}>
                {favorites.some((fav) => fav.episode === episode.episode) ? "Unfavorite" : "Favorite"}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No episodes available.</div>
      )}
    </div>
  );
}
