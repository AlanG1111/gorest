import React from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Home: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Typography variant='h4' component='span' gutterBottom>
        Press "Users" to receive data.
      </Typography>
    </Box>
  );
};

export default Home;
