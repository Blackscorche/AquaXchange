import React from "react";
import { ShieldCheck, Handshake, Building } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800">
          Everything you should know about <span className="text-blue-600">AquaXchange</span>
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Secure, fast, and reliable currency exchange for businesses and individuals.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-blue-300 text-center transition-transform duration-300 hover:scale-105">
          <ShieldCheck className="text-blue-600 w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Regulated & Secure</h2>
          <p className="text-gray-600 mt-2">
            AquaXchange is a fully licensed and regulated platform, ensuring your transactions are safe.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-blue-300 text-center transition-transform duration-300 hover:scale-105">
          <Handshake className="text-blue-600 w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Best Rates Guaranteed</h2>
          <p className="text-gray-600 mt-2">
            We offer competitive exchange rates with zero hidden fees, so you get the most value.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-blue-300 text-center transition-transform duration-300 hover:scale-105">
          <Building className="text-blue-600 w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-semibold text-gray-800 mt-4">Built for Businesses</h2>
          <p className="text-gray-600 mt-2">
            Manage your international payments effortlessly with our seamless business solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
