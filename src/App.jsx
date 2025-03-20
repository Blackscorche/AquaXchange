import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Rates from "./components/Rates";
import About from "./components/About";
import Exchange from "./components/Exchange";

// Layout Wrapper
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home page also includes Rates and About */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Rates />
                <About />
              </>
            }
          />
          {/* Separate pages for Rates and About */}
          <Route path="/rates" element={<Rates />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
