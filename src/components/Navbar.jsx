import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null); // Ref for detecting outside clicks

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav
      ref={menuRef}
      className="fixed left-[5px] right-[5px] top-[5px] bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-4 rounded-2xl shadow-lg z-50"
    >
      <div className="flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-semibold tracking-wide">
          AquaXchange
        </Link>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex gap-6 text-white text-lg font-medium">
          <li>
            <Link to="/" className="hover:opacity-80">Home</Link>
          </li>
          <li>
            <Link to="/rates" className="hover:opacity-80">Rates</Link>
          </li>
          <li>
            <Link to="/exchange" className="hover:opacity-80">Exchange</Link>
          </li>
          <li>
            <Link to="/About" className="hover:opacity-80">About</Link>
          </li>
        </ul>

        {/* Action Button */}
        <Link to="/exchange">
          <button className="hidden md:block bg-white text-blue-600 px-4 py-2 rounded-xl cursor-pointer font-medium shadow-md hover:bg-gray-100">
            Start Exchanging
          </button>
        </Link>

        {/* Hamburger Menu - Mobile */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Expanding smoothly */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-white text-lg font-medium px-4 py-3">
          <li>
            <Link to="/" className="hover:opacity-80" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/rates" className="hover:opacity-80" onClick={() => setOpen(false)}>Rates</Link>
          </li>
          <li>
            <Link to="/exchange" className="hover:opacity-80" onClick={() => setOpen(false)}>Exchange</Link>
          </li>
          <li>
            <Link to="/about" className="hover:opacity-80" onClick={() => setOpen(false)}>About</Link>
          </li>
          <Link to="/exchange">
            <button
              className="bg-white text-blue-600 px-4 py-2 rounded-xl cursor-pointer font-medium shadow-md hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Start Exchanging
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
