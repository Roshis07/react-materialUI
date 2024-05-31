import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import MovieContent from "./components/MovieContent";
import "./components/main.css";
const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="parent">
        <div className="nav">
          <NavBar />
        </div>

        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",
            padding: "55px",
            position: "relative",
            // marginTop: "20px",
          }}
        >
          <div className="sidebar-main">
            <Sidebar className="sidebar" />
          </div>
          <div className="movie-content">
            <MovieContent />
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
