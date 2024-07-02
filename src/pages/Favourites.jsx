import React, { useState, useEffect } from "react";

export default function Favourites({ favorites, setFavorites }) {
  const [sortedFavorites, setSortedFavorites] = useState([]);
  const [sortOption, setSortOption] = useState("a-z");

  useEffect(() => {
    // Sort favorites alphabetically by default
    const sorted = [...favorites].sort((a, b) => a.title.localeCompare(b.title));
    setSortedFavorites(sorted);
  }, [favorites]);

  const filterAndSortFavorites = (option) => {
    setSortOption(option);
    const sorted = [...favorites];

    if (option !== "none") {
      switch (option) {
        case "most-recent":
          sorted.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
          break;
        case "least-recent":
          sorted.sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));
          break;
        case "a-z":
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "z-a":
          sorted.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }
    } else {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    console.log(`Sorted favorites (${option}):`, sorted); // Debug log
    setSortedFavorites(sorted);
  };

  const removeAllFavorites = () => {
    if (window.confirm("Are you sure you want to remove all favorites?")) {
      setFavorites([]);
      setSortedFavorites([]);
      localStorage.removeItem("favorites");
    }
  };

  const removeFromFavorites = (favoriteId) => {
    const updatedFavorites = favorites.filter((fav) => fav.episode !== favoriteId);
    setFavorites(updatedFavorites);
    setSortedFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (sortedFavorites.length === 0) {
    return <div>No favorites added yet.</div>;
  }

  return (
    <div className="favorites-container">
      <h1>Favorites</h1>
      <div className="filter-buttons">
        <button onClick={() => filterAndSortFavorites("most-recent")}>Most Recent</button>
        <button onClick={() => filterAndSortFavorites("least-recent")}>Least Recent</button>
        <button onClick={() => filterAndSortFavorites("a-z")}>A-Z</button>
        <button onClick={() => filterAndSortFavorites("z-a")}>Z-A</button>
        <button onClick={removeAllFavorites}>Remove All</button>
      </div>
      {sortedFavorites.map((favorite) => (
        <div key={favorite.episode} className="favorite-card-link">
          <h2 className="favorite-title">{favorite.title}</h2>
          <p>{favorite.description}</p>
          <audio controls>
            <source src={favorite.file} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <button onClick={() => removeFromFavorites(favorite.episode)}>Remove</button>
        </div>
      ))}
    </div>
  );
}