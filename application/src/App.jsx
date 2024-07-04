import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HotelSearch from './components/HotelSearch';
import RestaurantSearch from './components/RestaurantSearch';
import Header from './components/Header';
import FamousPlacesSearch from './components/FamousPlacesSearch';


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
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Travel Buddy!</h1>
      <div className="space-x-4">
        <Link to="/hotels">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Hotels</button>
        </Link>
        <Link to="/restaurants">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Restaurants</button>
        </Link>
        <Link to="/famous-places">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Famous Places</button>
        </Link>
      </div>
    </div>
  </div>
);

export default App;
