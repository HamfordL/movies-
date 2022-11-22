import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!movies.length) {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=54dc11f42188e386e37add6996cbee5a&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    }
  });
  if (!movies.length) {
    return <CircularProgress />;
  }

  return (
    <Box gutter={[16, 16]}>
      {movies.map((movie) => (
        <Grid key={movie.original_title} span={6}>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            alt={movie.original_title}
            onClick={() => navigateTo(`/movie/${movie.id}`)}
          />

          {movie.original_title}
        </Grid>
      ))}
    </Box>
  );
};

export default MovieList;
