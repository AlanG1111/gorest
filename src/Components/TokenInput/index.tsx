import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TokenContext } from "../..";

const TokenInput = () => {
  const { setToken } = useContext(TokenContext);
  const [tokenState, setTokenState] = useState<string>("");

  const handleAuth = () => {
    if (tokenState) {
      setToken(tokenState);
      toast.success(`Token '${tokenState}' added!`);
      setTokenState("");
    } else {
      toast.error("Add your token!");
    }
  };
  return (
    <Box
      component='form'
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        value={tokenState}
        onChange={(e) => setTokenState(e.target.value)}
        id='token_input'
        label='Token'
        variant='standard'
      />
      <Button onClick={handleAuth} variant='contained'>
        Add access token
      </Button>
    </Box>
  );
};

export default TokenInput;
