import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navs from "./Component/Navs";
import Starred from "./Pages/Starred";

function App() {
  return (
    <div>
      <Navs />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Starred" element={<Starred />}></Route>
      </Routes>
    </div>
  );
}

export default App;
