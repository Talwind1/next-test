import React, { useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const API_GET_MOVIES = 'http://localhost:3000/movies'

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

if (loading){
   return  <p>loading</p> 
  }
return <div className="page"> 
<div className="wrap-title">
    <h1 className="title">EXPLORE YOUR NEXT <br/>MOVIES AND TV SHOWS</h1>
    </div>
    <div className="input-container"><input className="search-input" type="text" placeholder="Search name..." onChange={handleChange}/></div>
<div className="wrap-grid" >
  
  <div className="movie-grid">
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
  </div>
  </div>
  // </div> 
}

export default MovieList;