import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const MovieDetails = () => {
  const urlParams = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!movie) {
      fetch(`
      https://api.themoviedb.org/3/movie/${urlParams.id}?api_key=54dc11f42188e386e37add6996cbee5a&language=en-US`)
        .then((res) => res.json())
        .then((movieDetails) => {
          setMovie(movieDetails);
        });
    }
  });

  if (!movie) {
    return <CircularProgress />;
  }
  console.log(movie);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </Button>
      <br />
      <br />
      <Box sx={{ width: 550 }}>{movie.overview}</Box>
    </div>
  );
};

export default MovieDetails;
