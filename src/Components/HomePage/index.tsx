import React from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TokenInput from "../TokenInput";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 10,
      }}
    >
      <Typography variant='h4' component='span' gutterBottom>
        Enter your access token, then press "Users" to receive data.
      </Typography>
      <TokenInput />
    </Box>
  );
};

export default Home;
