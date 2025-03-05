import React, { useState, useEffect} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([]); // Initialize with empty list
  const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  console.log("Fetching movies...");
  
  fetch("http://localhost:3000/movies") // Check the port number!
    .then((response) => response.json())
    .then((data) => {
      console.log("Movies fetched:", data);
      setMovies(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
      setLoading(false);
    });
}, []);

  return movies.length === 0 ? (<p>no availeble</p>):(<div><h1>MovieList</h1>;
  <p>movies:{movies[0]['title']}</p>
  <div v-if="">
  {movies.map((movie) => (
        <MovieCard
          key={movie.id}  
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          pic={movie.image}
          released={movie.released}
        />
      ))}
  </div>  </div>)

}

export default MovieList;