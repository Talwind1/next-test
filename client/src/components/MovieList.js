import React, { useState, useEffect} from "react";
import MovieCard from "./MovieCard";
const API_GET_MOVIES = 'http://localhost:3000/movies'

const movieGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  padding: "20px",
  justifyContent: "center",
  backgroundColor:"#00D7FF"

};

function MovieList() {
  const [movies, setMovies] = useState([]); 
  const [filteredMovies, setFilteredMovies] = useState([]); 
  const [loading, setLoading] = useState(true);
//  const [error, setError] = useState(null);
//  const [searchTerm, setSearchTerm] = useState("");

 const fetchMovies=()=>{
  fetch(API_GET_MOVIES) 
  .then((response) => response.json())
  .then((data) => {
    console.log("Movies fetched:", data);
    setMovies(data);
    setFilteredMovies(data)
    setLoading(false);
  })
  .catch((error) => {
    console.error("Fetch Error:", error);
    setLoading(false);
  });
 }

 const handleChange=(event)=>{
  const value = event.target.value.toLowerCase();
    // setSearchTerm(value);
    if (value.trim()===""){
      setFilteredMovies(movies);
      return;
    }
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(value)
    );
    setFilteredMovies(filtered);
 }

 useEffect(() => {
  console.log("Fetching movies...");
  fetchMovies()
}, []);

  return loading ? (<p>loading</p>):(<div> 
    <h1 style={{backgroundColor:"#00D7FF"}}>EXPLORE YOUR NEXT MOVIES AND TV SHOWS</h1>
    <ul><input type="text" placeholder="Search name..." onChange={handleChange}/></ul>
    {/* <ul><input type="checkbox"/></ul> */}
  <div style={movieGridStyle}>
  {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.id}  
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          pic={movie.image}
          released={movie.released}
        />
      ))}
  </div></div>)

}

export default MovieList;