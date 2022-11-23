import * as React from "react";

import Stack from "@mui/material/Stack";

import { Routes, Route } from "react-router-dom";

import Movies from "./components/movies-list";
import MovieDetail from "./components/movies-details";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// display list of movies (done)
// display details of movies

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h4"> Popular Movies!</Typography>
      </ThemeProvider>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      ></Stack>
      <Routes>
        <Route path="/" exact element={<Movies />} />
        <Route path="/movie/:id" exact element={<MovieDetail />} />
      </Routes>
    </div>
  );
}
export default App;
