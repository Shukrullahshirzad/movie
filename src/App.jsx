
import { useState } from "react";
import heroImg from "./assets/hero.png";
import Search from "./components/Search";
export default function App() {
    const [seartchTerm, setSearchTerm] = useState("");
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
              </header>
              <Search seartchTerm={seartchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
}
