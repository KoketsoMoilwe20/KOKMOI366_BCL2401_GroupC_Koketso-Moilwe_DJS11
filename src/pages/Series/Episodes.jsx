import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { LoadingContext } from "../../components/LoadingContext";

export default function Episodes({ favorites, setFavorites }) {
  const { seasonId } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { loading: globalLoading, setLoading: setGlobalLoading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchEpisodes = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${seasonId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const allEpisodes = data.seasons.flatMap((season) => season.episodes);
        setEpisodes(allEpisodes);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEpisodes();
  }, [seasonId]);

  const toggleFavorite = (episode) => {
    const isFavorited = favorites.some((fav) => fav.episode === episode.episode);
    const updatedFavorites = isFavorited
      ? favorites.filter((fav) => fav.episode !== episode.episode)
      : [...favorites, { ...episode, dateAdded: new Date().toISOString() }];
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
              <audio controls>
                <source src={episode.file} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <button onClick={() => toggleFavorite(episode)}>
                {favorites.some((fav) => fav.episode === episode.episode) ? "Unfavorite" : "Favorite"}
              </button>
              {favorites.some((fav) => fav.episode === episode.episode) && (
                <p>
                  Added to favorites on:{" "}
                  {new Date(favorites.find((fav) => fav.episode === episode.episode).dateAdded).toLocaleString()}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div>No episodes available.</div>
      )}
    </div>
  );
}