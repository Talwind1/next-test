import React from "react";

function MovieCard({id, title, rating, pic, released}) {

  return <div><h1>title</h1>
  <img src= {pic} alt= {title}/>
  <h5> {title} ({released})</h5>
  <h5> {rating} ⭐ </h5>

  </div>
  ;
}

export default MovieCard;