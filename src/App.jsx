import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Exchange from "./components/Exchange";
import Rates from "./components/Rates";
import Footer from "./components/Footer";
import About from "./components/About";

function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <Rates />
        <About/>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Default layout with scrolling sections */}
        <Route path="/" element={<MainPage />} />
        {/* Separate Exchange page */}
        <Route
          path="/exchange"
          element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <Exchange />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
