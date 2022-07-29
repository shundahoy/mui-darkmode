import React from "react";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { blueGrey, brown, grey } from "@mui/material/colors";
import { PaletteType } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [mode, setMode] = React.useState("light");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode as PaletteType,
          ...(mode === "light"
            ? {
                primary: blueGrey,
                divider: blueGrey[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                proginalda: "#fff",
              }
            : {
                primary: brown,
                divider: brown[700],
                background: {
                  default: brown[900],
                  paper: brown[900],
                },
                text: {
                  primary: "#fff",
                  secondary: brown[500],
                },
              }),
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
