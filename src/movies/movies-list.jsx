import { useEffect, useState } from "react";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import { useNavigate } from "react-router-dom";

const MovieList = (movie) => {
  const [movies, setMovies] = useState([]);
  const navigateTo = useNavigate();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    if (!movies.length) {
      fetch(
        "https://api.themoviedb.org/3/movie/latest?api_key=54dc11f42188e386e37add6996cbee5a&language=en-US"
      )
        .then((response) => response.json())
        .then((response) =>
          Promise.all(
            response.results.map((result) =>
              fetch(result.url).then((res) => res.json())
            )
          )
        )
        .then((data) => setMovies(data));
    }
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies.from(movies(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>
              {" "}
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                alt={movie.path}
              />{" "}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieList;
