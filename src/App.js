import React from "react";
import "./style/style.css";
import HomeComponents from "./components/Home-components";
import InfoComponents from "./components/Info-page-components.js";
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
