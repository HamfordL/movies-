import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Routes, Route } from "react-router-dom";

import Movies from "./components/movies-list";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(15),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Popular Movies!</Typography>
      </ThemeProvider>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      ></Stack>
      <Routes>
        <Route path="/" exact element={<Movies />} />
      </Routes>
    </div>
  );
}
export default App;
