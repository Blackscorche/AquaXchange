import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const textArray = [
    "AquaXchange",
    "Effortless Currency Exchange with AquaXchange"
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];

    if (!isDeleting && charIndex < currentText.length) {
      setTimeout(() => setCharIndex((prev) => prev + 1), 100);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => setCharIndex((prev) => prev - 1), 50);
    } else {
      setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setIndex((prev) => (prev + 1) % textArray.length);
        }
      }, 1200);
    }

    setText(currentText.substring(0, charIndex));
  }, [charIndex, isDeleting, index]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white overflow-hidden">
      {/* Soft Gradient Spots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-blue-400 opacity-35 rounded-full blur-2xl animate-move1"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-purple-400 opacity-35 rounded-full blur-2xl animate-move2"></div>
      </div>

      {/* Typewriter Effect */}
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text p-2">
        {text}
        <span className="text-blue-600 animate-blink">|</span>
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Get real-time exchange rates and convert currencies instantly.  
        Start exchanging now with AquaXchange.
      </p>

      {/* Call-to-Action Button */}


    

      <Link to={"/exchange"}>
        <button className="mt-6 bg-blue-600 cursor-pointer text-white px-6 py-3 text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
            Convert Now
        </button>
      </Link>
    </section>
  );
}
