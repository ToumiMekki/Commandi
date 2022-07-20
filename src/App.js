import React from "react";
import Home from "./Pages/Home";
import Menu from './Pages/Menu'
import { Routes, Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
