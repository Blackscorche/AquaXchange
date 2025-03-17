const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 w-full mt-auto rounded-t-2xl">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="font-bold text-lg">About AquaXchange</h2>
            <p className="text-sm mt-2">
              AquaXchange provides real-time cryptocurrency tracking, helping you stay updated with the latest market trends and insights.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Market Trends</a></li>
              <li><a href="#" className="hover:underline">Exchange</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg">Get in Touch</h2>
            <p className="mt-2 flex items-center"><span className="mr-2">📍</span> 123 Blockchain Avenue, Crypto City</p>
            <p className="mt-1 flex items-center"><span className="mr-2">📞</span> +1 555 123 4567</p>
            <p className="mt-1 flex items-center"><span className="mr-2">📧</span> support@aquaxchange.com</p>
            <div className="mt-3 flex space-x-3">
              <a href="#" className="hover:text-gray-300">📘 Facebook</a>
              <a href="#" className="hover:text-gray-300">🐦 Twitter</a>
              <a href="#" className="hover:text-gray-300">📷 Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 border-t border-gray-400 pt-4">
          Developed by <span className="font-bold">Abu Issa</span> | © 2025 AquaXchange. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  