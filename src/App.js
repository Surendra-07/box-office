import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Service from "./Pages/Service";
import Home from "./Pages/Home";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import Navs from "./Component/Navs";

function App() {
  return (
    <div>
      <Navs />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Aboutus" element={<Aboutus />}></Route>
        <Route exact path="/Contactus" element={<Contactus />}></Route>
        <Route exact path="/Service" element={<Service />}></Route>
      </Routes>
    </div>
  );
}

export default App;
