import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const showHomeLink = location.pathname !== '/';

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="text-white">Travel Buddy</Link>
        </h1>
        {showHomeLink && (
          <nav>
            <Link to="/" className="text-white">Home</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
