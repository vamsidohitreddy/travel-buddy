import React, { useState } from 'react';
import { TextField, Autocomplete, CircularProgress } from '@mui/material';

const cities = [
  { name: 'London', bl_latitude: 51.2868, tr_latitude: 51.6919, bl_longitude: -0.5104, tr_longitude: 0.3340 },
  { name: 'Paris', bl_latitude: 48.8156, tr_latitude: 48.9021, bl_longitude: 2.2242, tr_longitude: 2.4699 },
  { name: 'Berlin', bl_latitude: 52.3382, tr_latitude: 52.6755, bl_longitude: 13.0884, tr_longitude: 13.7611 },
  { name: 'Rome', bl_latitude: 41.6558, tr_latitude: 42.0176, bl_longitude: 12.2430, tr_longitude: 12.8559 },
  { name: 'Madrid', bl_latitude: 40.3121, tr_latitude: 40.6432, bl_longitude: -3.8881, tr_longitude: -3.5467 },
  { name: 'New Delhi', bl_latitude: 28.404, tr_latitude: 28.8838, bl_longitude: 76.8371, tr_longitude: 77.2813 },
  { name: 'Hyderabad', bl_latitude: 17.1234, tr_latitude: 17.6513, bl_longitude: 78.2312, tr_longitude: 78.6069 }
];

const HotelSearch = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);

  const fetchData = async (city) => {
    setLoading(true);
    const url = `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary?bl_latitude=${city.bl_latitude}&tr_latitude=${city.tr_latitude}&bl_longitude=${city.bl_longitude}&tr_longitude=${city.tr_longitude}&limit=30&currency=USD&subcategory=hotel%2Cbb%2Cspecialty&adults=1`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setHotels(result.data);
      console.log(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (event, value) => {
    setSelectedCity(value);
    if (value) {
      fetchData(value);
    }
  };

  return (
    <div className="p-5">
    <h2 className="text-2xl font-bold mb-4">Hotel Search</h2>
      <Autocomplete
        options={cities}
        getOptionLabel={(option) => option.name}
        onChange={handleCityChange}
        renderInput={(params) => <TextField {...params} label="Select a City" variant="outlined" />}
      />
      {loading ? (
        <div className="flex justify-center items-center h-96">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {hotels.map((hotel) => (
            <div key={hotel.location_id} className="max-w-xs mx-auto">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  className="w-full h-36 object-cover"
                  src={hotel.photo ? hotel.photo.images.large.url : 'https://via.placeholder.com/150'}
                  alt={hotel.name}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{hotel.name}</h3>
                  <p className="text-sm text-gray-600">Rating: {hotel.rating}</p>
                  <p className="text-sm text-gray-600">Price: {hotel.price}</p>
                  <p className="text-sm text-gray-600">Ranking: {hotel.ranking}</p>
                  <p className="text-sm text-gray-600">Subcategory: {hotel.subcategory_type_label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelSearch;
