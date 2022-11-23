import * as React from "react";

import Stack from "@mui/material/Stack";

import { Routes, Route } from "react-router-dom";

import Movies from "./views/movies-list";
import MovieDetail from "./components/movies-details";
import NowPlaying from "./views/now-playing";
import TopRated from "./views/top-rated";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="left"
        alignItems="left"
        spacing={2}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4"> Popular Movies!</Typography>
        </ThemeProvider>

        <Routes>
          <Route path="/" exact element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>

        <ThemeProvider theme={theme}>
          <Typography variant="h4">Now Playing</Typography>
        </ThemeProvider>

        <Routes>
          <Route path="/" element={<NowPlaying />} />
        </Routes>

        <ThemeProvider theme={theme}>
          <Typography variant="h4">Top Rated</Typography>
        </ThemeProvider>

        <Routes>
          <Route path="/" element={<TopRated />} />
        </Routes>
      </Stack>
    </div>
  );
}
export default App;
