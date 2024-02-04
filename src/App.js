import "./App.css";
import React from "react";
import HomeComponents from "./components/home-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomeComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
