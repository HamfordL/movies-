import * as React from "react";

import Stack from "@mui/material/Stack";

import { Routes, Route } from "react-router-dom";

import Movies from "./views/movies-list";
import NowPlaying from "./views/now-playing";
import TopRated from "./views/top-rated";
import MovieDetail from "./components/movies-details";

function App() {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="left"
        alignItems="left"
        spacing={2}
      >
        <Routes>
          <Route path="/" exact element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>

        <Routes>
          <Route path="/" element={<NowPlaying />} />
        </Routes>

        <Routes>
          <Route path="/" element={<TopRated />} />
        </Routes>
      </Stack>
    </div>
  );
}
export default App;
