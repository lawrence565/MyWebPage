import React from "react";
<<<<<<< HEAD
import { Switch } from "react-router-dom";
=======
import "./style/style.css";
import HomeComponents from "./components/Home-components";
import InfoComponents from "./components/Info-page-components.js";
import ProfolioComponents from "./components/profolio-components";
>>>>>>> 5572d13a (Changing footer style)
import Layout from "./components/Layout";
import "./style/style.css";
import HomeComponents from "./components/Home-components";
import InfoComponents from "./components/Info-page-components.js";
import ProfolioComponents from "./components/Profolio-components.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MyWebPage" element={<Layout />}>
          <Route index element={<HomeComponents />} />
          <Route path="about" element={<InfoComponents />} />
          <Route path="profolio" element={<ProfolioComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
