import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";

import { CssBaseline } from "@mui/material";

import App from "./App";

export const TokenContext = createContext<IContext>({
  token: "",
  setToken: () => {},
});

interface IContext {
  token: string | undefined;
  setToken: (t: string) => void;
}

const Main = () => {
  const [token, setToken] = useState<string>();
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <CssBaseline />
      <App />
    </TokenContext.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Main />);
