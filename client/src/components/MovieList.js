import React, { useState, useEffect} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
const movieGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  padding: "20px",
  justifyContent: "center",
  backgroundColor:"#00D7FF"

};

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

  return movies.length === 0 ? (<p>no availeble</p>):(<div>  
    <h1 style={{backgroundColor:"#00D7FF"}}>EXPLORE YOUR NEXT MOVIES AND TV SHOWS</h1>

  
  <div style={movieGridStyle}>
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