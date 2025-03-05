import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";



function MoviePage() {
  const  id  = useParams();
useEffect(() => {
console.log("Movie ID from URL:", id);
})

  const navigate = useNavigate(); 
  return

  <div>  <p>ggggg</p>
  <button onClick={() => navigate(`/`)}>Home</button>
  <h1>MoviePage {id}</h1>;
  </div>

}

export default MoviePage;