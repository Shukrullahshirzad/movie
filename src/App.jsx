
import { useState, useEffect } from "react";
import heroImg from "./assets/hero.png";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`
    }
};


export default function App() {
    const [seartchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async () => {
        setIsLoading(true);

        try {
            const endpint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
            const response = await fetch(endpint, API_OPTIONS);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if(data.response === "False") {
                setErrorMessage(data.error || "No movies found.");
                setMoviesList([]);
                return

            }
            setMoviesList(data.results || []);
            setErrorMessage(null);
        } catch (error) {
            console.error("Error fetching movies:", error);
            setErrorMessage("Failed to fetch movies. Please try again later.");
        }
        finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies()
    }, []);
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src={heroImg} alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Like
            Without the Hassel
          </h1>
              <Search seartchTerm={seartchTerm} setSearchTerm={setSearchTerm} />
              </header>
              <section className="all-movies">
                  <h2>All Movies</h2>
                  {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                  {/* Movie list will be rendered here */}
              </section>
      </div>
    </main>
  );
}
