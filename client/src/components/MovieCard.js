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
  return <div>
  <img src= {pic} alt= {title}/>
  <h5> {title} ({released})</h5>
  <h5> {rating} ⭐ </h5>
<button onClick={() => {console.log("pushed",id);

  navigate(`/movies/${id}`)}}>Read more</button>
  </div>
  ;
}

export default MovieCard;