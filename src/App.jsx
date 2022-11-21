import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import { Routes, Route } from "react-router-dom";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// display list of movies
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

export default function App() {
  return (
    <div>
      <ThemeProvider
        theme={theme}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">Your Lastest Movies!</Typography>
      </ThemeProvider>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
      </Stack>
    </div>
  );
}
