// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import Home from "./pages/Dashboard";
import PublicRoute from "./savedRoutes/PublicRouting";
import PrivateRoute from "./savedRoutes/PrivateRouting";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
