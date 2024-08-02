import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HotelSearch from "./components/HotelSearch";
import RestaurantSearch from "./components/RestaurantSearch";
import Header from "./components/Header";
import FamousPlacesSearch from "./components/FamousPlacesSearch";
import Translator from "./components/Translator";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="p-5">
        <Routes>
          <Route path="/hotels" element={<HotelSearch />} />
          <Route path="/restaurants" element={<RestaurantSearch />} />
          <Route path="/" element={<Home />} />
          <Route path="/famous-places" element={<FamousPlacesSearch />} />
          <Route path="translator" element={<Translator />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="flex justify-center items-center">
    <div className="text-center mt-5">
      <h1 className="text-3xl font-bold mb-4 pt-5">Welcome to Travel Buddy...</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
        {/* Card for Hotels */}
        <div className="border border-black rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Hotels</h2>
          <p className="mb-4">
            Discover the best hotels with great amenities and comfort.
          </p>
          <Link to="/hotels">
            <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md hover:bg-blue-600">
              View Hotels
            </button>
          </Link>
        </div>

        {/* Card for Restaurants */}
        <div className="border border-black rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
          <p className="mb-4">
            Explore the best dining options and cuisines around you.
          </p>
          <Link to="/restaurants">
            <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-md hover:bg-green-600">
              View Restaurants
            </button>
          </Link>
        </div>

        {/* Card for Famous Places */}
        <div className="border border-black rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Famous Places</h2>
          <p className="mb-4">
            Discover iconic landmarks and must-see attractions.
          </p>
          <Link to="/famous-places">
            <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-md hover:bg-blue-600">
              View Famous Places
            </button>
          </Link>
        </div>

        {/* Card for Translator */}
        <div className="border border-black rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Translator</h2>
          <p className="mb-4">
            Translate text between different languages easily.
          </p>
          <Link to="/translator">
            <button className="bg-green-500 text-white text-lg px-4 py-2 rounded-md hover:bg-green-600">
              Use Translator
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  
);

export default App;
