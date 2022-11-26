import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!topRated.length) {
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=54dc11f42188e386e37add6996cbee5a&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((data) => setTopRated(data.results));
    }
  });
  if (!topRated.length) {
    return <CircularProgress />;
  }

  return (
    <Stack>
      <Box padding={5}>
        <h1>Top Rated</h1>
        <br />
        <Box
          sx={{
            display: "line-flex",
            width: "100%",
            height: 400,
            overflowY: "auto",
            columns: "600px",
          }}
        >
          {topRated.map((movie) => (
            <Grid container key={movie.original_title}>
              <Box>
                {movie.original_title}
                <br />
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  alt={movie.original_title}
                  onClick={() => navigateTo(`/movie/${movie.id}`)}
                />
              </Box>
            </Grid>
          ))}
        </Box>
      </Box>
    </Stack>
  );
};

export default TopRated;
