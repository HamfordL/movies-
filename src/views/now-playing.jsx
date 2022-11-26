import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!nowPlaying.length) {
      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=54dc11f42188e386e37add6996cbee5a&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((data) => setNowPlaying(data.results));
    }
  });
  if (!nowPlaying.length) {
    return <CircularProgress />;
  }

  return (
    <Stack>
      <Box padding={5}>
        <h1>Now Playing</h1>
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
          {nowPlaying.map((movie) => (
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

export default NowPlaying;
