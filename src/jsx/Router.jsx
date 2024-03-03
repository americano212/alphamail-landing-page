import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Submit from "./Submit";
import App from "./App";


const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;