import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MoviePage.css"; 


function MoviePage() {
  const  {id}  = useParams();
  const [movie, setMovie] = useState(null); 
  useEffect(() => {
    console.log("Fetching movie details...");
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        setMovie(data[0]); 
      })
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  const navigate = useNavigate(); 
  return movie!=null? (<div className="movie-container" > 
  <button onClick={() => navigate(`/`)}>back</button>
  <h3> {movie['title']} ({movie['released']})</h3>
  <img src={movie['image']} alt={movie['title']}/>
  <div style={{"textAlign":"left"}}>
  <h5> <u>Synopsis:</u> {movie['synopsis'].replace(/<br><b>New on \d{4}-\d{2}-\d{2}<\/b>/g, '')}</h5>
  <h5><u>Duration:</u> {movie['runtime']}</h5>
  <h5><u>Rating:</u> {movie['rating']}★</h5>
  </div>
  </div>):<p>loading</p>

}

export default MoviePage;