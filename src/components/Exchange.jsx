import React, { useState, useEffect } from "react";
import { ChevronDown, RefreshCw } from "lucide-react"; // Modern icons

const Exchange = () => {
  const [currencies, setCurrencies] = useState({});
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("eur");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    )
      .then((response) => response.json())
      .then((data) => setCurrencies(data[fromCurrency]));
  }, [fromCurrency]);

  const handleConvert = () => {
    if (currencies[toCurrency]) {
      setConvertedAmount((amount * currencies[toCurrency]).toFixed(2));
    }
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-24 bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Currency Exchange
        </h2>

        <div className="space-y-5">
          {/* Amount Input */}
          <div className="relative flex flex-col">
            <label className="text-gray-500 mb-1">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-white border border-gray-300 px-4 py-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* From Currency Input */}
          <div className="relative flex flex-col">
            <label className="text-gray-500 mb-1">From:</label>
            <div
              className="relative cursor-pointer"
              onClick={() => setShowFromList(!showFromList)}
            >
              <input
                type="text"
                value={fromCurrency.toUpperCase()}
                readOnly
                className="bg-white border border-gray-300 px-4 py-3 pr-10 rounded-xl shadow-sm focus:outline-none w-full cursor-pointer"
              />
              <ChevronDown className="absolute right-3 top-3 text-gray-400" />
            </div>
            {showFromList && (
              <div className="absolute z-10 bg-white border border-gray-200 shadow-lg rounded-xl w-full mt-2 max-h-40 overflow-y-auto">
                {Object.keys(currencies).map((currency) => (
                  <div
                    key={currency}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFromCurrency(currency);
                      setShowFromList(false);
                    }}
                  >
                    {currency.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              onClick={swapCurrencies}
              className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition"
            >
              <RefreshCw className="text-gray-600" />
            </button>
          </div>

          {/* To Currency Input */}
          <div className="relative flex flex-col">
            <label className="text-gray-500 mb-1">To:</label>
            <div
              className="relative cursor-pointer"
              onClick={() => setShowToList(!showToList)}
            >
              <input
                type="text"
                value={toCurrency.toUpperCase()}
                readOnly
                className="bg-white border border-gray-300 px-4 py-3 pr-10 rounded-xl shadow-sm focus:outline-none w-full cursor-pointer"
              />
              <ChevronDown className="absolute right-3 top-3 text-gray-400" />
            </div>
            {showToList && (
              <div className="absolute z-10 bg-white border border-gray-200 shadow-lg rounded-xl w-full mt-2 max-h-40 overflow-y-auto">
                {Object.keys(currencies).map((currency) => (
                  <div
                    key={currency}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setToCurrency(currency);
                      setShowToList(false);
                    }}
                  >
                    {currency.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Convert Button */}
          <button
            onClick={handleConvert}
            className="bg-blue-600 text-white py-3 px-6 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Convert
          </button>

          {/* Conversion Result */}
          {convertedAmount !== null && (
            <p className="text-lg font-bold text-center mt-4 text-gray-800">
              {amount} {fromCurrency.toUpperCase()} = {convertedAmount}{" "}
              {toCurrency.toUpperCase()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exchange;
