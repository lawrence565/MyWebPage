import React from "react";
import "./style.css";
import HomeComponents from "./components/home-components";
import InfoComponents from "./components/info-components";
import ProfolioComponents from "./components/profolio-components";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponents />} />
          <Route path="about" element={<InfoComponents />} />
          <Route path="profolio" element={<ProfolioComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
