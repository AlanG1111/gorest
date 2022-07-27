import React from "react";
import ReactDOM from "react-dom/client";

import { CssBaseline } from "@mui/material";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <CssBaseline />
    <App />
  </>
);
