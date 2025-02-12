import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './pages/main.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



import Home from "./pages/Home";
import Freight_Invoice from "./pages/Freight_Invoice";
import Clearance_Invoice from "./pages/Clearance_Invoice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freight-invoice" element={<Freight_Invoice />} />
          <Route path="/clearance-invoice" element={<Clearance_Invoice />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
