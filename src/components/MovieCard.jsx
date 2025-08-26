import React from "react";
import star from "../assets/star.svg";

function MovieCard({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) {
  return (
    <div className="movie-card hover:bg-gray-800 group hover:cursor-pointer">
      <img
        className="transition-transform duration-300 group-hover:scale-[1.03]"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />
      <h3>{title}</h3>
      <div className="content ">
        <div className="rating ">
          <img className="" src={star} alt="star icon" />
          <p>{vote_average ? vote_average.toFixed(1) : "N/A"} </p>
        </div>
        <span>•</span>
        <p className="lang">{original_language}</p>
        <span>•</span>
        <p className="year">
          {release_date ? release_date.split("-")[0] : "N/A"}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
