import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css"; 

const movieCardStyle = {
  background: "white",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  transition: "transform 0.2s ease-in-out",
};

function MovieCard({id, title, rating, pic, released}) {
  const navigate = useNavigate(); 
  return <div className="movie-card">
  <img className="movie-image" src= {pic} alt= {title}/>
  <div className="movie-name"> {title} ({released})</div>
 <div className="rating-wrap ">
  <div className="rating">
    ★{rating} 
     </div>
  </div>
<button className="btn" onClick={() => {console.log("pushed",id);

  navigate(`/movies/${id}`)}}> Read more → </button>
  </div>
  ;
}

export default MovieCard;