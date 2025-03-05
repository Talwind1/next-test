import MovieList from "./components/MovieList";
import MoviePage from "./components/MoviePage";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MoviePage />} /> Dynamic route
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
