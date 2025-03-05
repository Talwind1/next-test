import axios from 'axios'


const get_movies = axios.get('http://localhost:3000/movies')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

export default api;