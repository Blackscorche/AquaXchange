import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Rates from "./components/Rates";
import About from "./components/About";
import Exchange from "./components/Exchange";

// MainPage Layout (for homepage, rates, about)
function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <Rates />
        <About />
      </main>
      <Footer />
    </div>
  );
}

// ExchangePage Layout (for the exchange page)
function ExchangePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Exchange />
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
        
        {/* Separate layout for Exchange page */}
        <Route path="/exchange" element={<ExchangePage />} />
      </Routes>
    </Router>
  );
}

export default App;
