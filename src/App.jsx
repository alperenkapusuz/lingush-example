import React from "react";
import Navi from "./components/Navbar/Navi";
import MainMenu from "./components/MainMenu/MainMenu";
import AboutUs from "./components/AboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
