import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

const movieDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default movieDetails;
