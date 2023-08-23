import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// page
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

// components
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
