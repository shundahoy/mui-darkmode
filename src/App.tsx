import React from "react";
import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { blueGrey, brown, grey } from "@mui/material/colors";
import { PaletteType } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
function App() {
  const [mode, setMode] = React.useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
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
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </ThemeProvider>
  );
}

export default App;
