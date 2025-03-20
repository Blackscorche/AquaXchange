import React from "react";
import { ShieldCheck, DollarSign, Globe } from "lucide-react";

export default function About() {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center px-6 py-16 bg-gray-50 mt-9 ">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800">
          Everything you should know about <span className="text-blue-600">AquaXchange</span>
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Your go-to platform for checking currency exchange rates and converting currencies.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl w-full">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-blue-300 text-center transition-transform duration-300 hover:scale-105">
          <ShieldCheck className="text-blue-600 w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Check Live Exchange Rates</h2>
          <p className="text-gray-600 mt-2">
            Stay updated with real-time exchange rates for various currencies worldwide.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-blue-300 text-center transition-transform duration-300 hover:scale-105">
          <DollarSign className="text-blue-600 w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Instant Currency Conversion</h2>
          <p className="text-gray-600 mt-2">
            Easily convert one currency to another and see how much it’s worth.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-blue-300 text-center transition-transform duration-300 hover:scale-105">
          <Globe className="text-blue-600 w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Wide Global Coverage</h2>
          <p className="text-gray-600 mt-2">
            AquaXchange supports a wide range of global currencies.
          </p>
        </div>
      </div>
    </div>
  );
}
