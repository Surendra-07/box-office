import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navs from "./Component/Navs";
import Starred from "./Pages/Starred";
import Show from "./Pages/Show";
import { ThemeProvider } from "styled-components";
import Title from "./Component/Title";

const theme = {
  mainColors: {
    blue: "#2400ff",
    gray: "#c6c6c6",
    dark: "#353535",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Title />
      <Navs />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Starred" element={<Starred />}></Route>
        <Route exact path="/show/:id" element={<Show />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
