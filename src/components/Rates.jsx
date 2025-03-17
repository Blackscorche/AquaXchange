import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function CryptoRates() {
  const [cryptoList, setCryptoList] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCryptoList();
  }, []);

  useEffect(() => {
    setFilteredList(
      cryptoList.filter((crypto) =>
        crypto.name.toLowerCase().includes(search.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, cryptoList]);

  const fetchCryptoList = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      );
      const data = await res.json();
      setCryptoList(data);
      setFilteredList(data);
    } catch (error) {
      console.error("Error fetching crypto list:", error);
    }
  };

  const fetchCryptoData = async (cryptoId) => {
    setError(null);
    setChartData([]);
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=30&interval=daily`
      );
      const data = await res.json();

      if (!data.prices || data.prices.length === 0) {
        setError("No data available for this cryptocurrency.");
        return;
      }

      const formattedData = data.prices.map(([timestamp, price]) => ({
        name: new Date(timestamp).toLocaleDateString(),
        value: price,
      }));

      const minPrice = Math.min(...formattedData.map((d) => d.value));
      const adjustedMin = minPrice * 0.9;

      setChartData(formattedData);
      setSelectedCrypto(cryptoList.find((crypto) => crypto.id === cryptoId)?.name || "Unknown");
    } catch (error) {
      console.error("Error fetching crypto data:", error);
      setError("Failed to load data. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-white px-6 py-10">
      <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md max-h-96 overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Crypto Exchange Rates</h2>
        <input
          type="text"
          placeholder="Search Cryptocurrency..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ul className="space-y-3">
          {filteredList.map((crypto) => (
            <li
              key={crypto.id}
              onClick={() => fetchCryptoData(crypto.id)}
              className="flex justify-between bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-blue-100 transition"
            >
              <div className="flex items-center gap-2">
                <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
                <span className="text-lg font-medium">{crypto.symbol.toUpperCase()}</span>
              </div>
              <span className="text-lg font-medium">${crypto.current_price.toLocaleString()}</span>
              <span
                className={`text-lg font-medium ${
                  crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {selectedCrypto ? `${selectedCrypto} Trends (30 Days)` : "Select a Crypto"}
        </h2>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" domain={['dataMin * 0.9', 'auto']} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                strokeWidth={3}
                dot={{ fill: "#8884d8", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">Click a cryptocurrency to see its trend.</p>
        )}
      </div>
    </div>
  );
}
