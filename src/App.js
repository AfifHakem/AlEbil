import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Mod from "./components/Mod";
import Level from "./components/Level";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mod/:modId" element={<Mod />} />
        <Route path="/mod/:modId/level/:levelId" element={<Level />} />
        <Route path="/mod/:modId/level/:levelId/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
