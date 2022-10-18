import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Icon } from "@iconify/react";

import Navbar from "./components/Navbar";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <div className="w-full h-screen flex bg-secondary text-black">
      <Router>
        <Navbar />
        <main className="flex-1 p-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
import index from "./page/Dashboard";

export default App;
