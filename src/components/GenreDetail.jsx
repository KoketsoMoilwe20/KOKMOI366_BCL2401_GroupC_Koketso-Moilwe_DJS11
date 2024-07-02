import React from "react";
import {useState, useEffect} from "react";

const GenreDetail = ({ match }) => {
    const [genre, setGenre] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const id = match.params.id;
  
    useEffect(() => {
      const fetchGenre = async () => {
        try {
          const response = await fetch("https:podcast-api.netlify.app/genre/${id}");
          const data = await response.json();
          setGenre(data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
      fetchGenre();
    }, [id]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        <h1>Genre {id}</h1>
        <ul>
          {genre.podcasts.map((podcast) => (
            <li key={podcast.id}>{podcast.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default GenreDetail;