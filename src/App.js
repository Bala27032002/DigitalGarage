import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Forms/Login";
import Home from "./components/pages/Home";
import "./index.css";
import "./App.css";
import AddCourse from "./components/admin/Addcourse";
import Manage from "./components/pages/Manage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Addcourse" element={<AddCourse />} />
          <Route path="/manage" element={<Manage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
