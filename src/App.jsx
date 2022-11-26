import * as React from "react";

import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import Movies from "./views/movies-list";
import NowPlaying from "./views/now-playing";
import TopRated from "./views/top-rated";
import MovieDetail from "./components/movies-details";

import MovieWheel from "./images/moviewheel.jpg";

function App() {
  return (
    <div>
      <Box
        sx={{
          fontWeight: "bold",
          fontSize: 50,
          height: 150,
          position: "center",
          backgroundImage: `url(${MovieWheel})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0px",
          textAlign: "center",
        }}
      >
        <br />
        MOVIE BOX!
      </Box>
      <Box
        sx={{
          width: "100%",
          background: "black",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <Grid xs={16}>
          <Routes>
            <Route path="/" exact element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </Grid>
      </Box>

      <Box
        sx={{
          width: "100%",
          background: "black",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <Routes>
          <Route path="/" element={<NowPlaying />} />
        </Routes>
      </Box>

      <Box
        sx={{
          width: "100%",

          background: "black",
          color: "white",
          fontWeight: "bold",
        }}
      >
        <Routes>
          <Route path="/" element={<TopRated />} />
        </Routes>
      </Box>
      <Box
        sx={{
          fontWeight: "bold",
          fontSize: 50,
          height: 150,
          position: "center",
          backgroundImage: `url(${MovieWheel})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0px",
          textAlign: "center",
        }}
      ></Box>
    </div>
  );
}
export default App;
