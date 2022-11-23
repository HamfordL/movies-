import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

const MovieDetails = () => {
  const urlParams = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!movie) {
      fetch(`
      https://api.themoviedb.org/3/movie/${urlParams.id}?api_key=54dc11f42188e386e37add6996cbee5a&language=en-US`)
        .then((res) => res.json())
        .then((movieDetails) =>
          fetch(movieDetails.genre_id.id.url).then((res) => res.json())
        )
        .then(([movieDetails]) => {
          setMovie({
            ...movieDetails,
            details: movieDetails,
          });
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
        onClick={() => {
          alert("clicked");
          navigate(-1);
        }}
      >
        Go back
      </Button>

      <Grid key={movie.overview} span={12}>
        {movie.map((movieDetails) => (
          <li key={movieDetails.overview}>{movieDetails.overview}</li>
        ))}
      </Grid>
    </div>
  );
};

export default MovieDetails;
