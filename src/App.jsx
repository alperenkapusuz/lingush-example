import React from "react";
import Navi from "./components/Navbar/Navi";
import MainMenu from "./components/MainMenu/MainMenu";
import AboutUs from "./components/AboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import { AuthProvider } from "./contexts/AuthContexts";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Navi />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><DashBoard/></PrivateRoute>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
