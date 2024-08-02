import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const showHomeLink = location.pathname !== '/';

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      {/* Title */}
      <Link
        to="/"
        className="flex items-center h-10 px-10 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-500 rounded-tl-full rounded-br-full font-bold uppercase italic text-white hover:opacity-90"
      >
        Travel Buddy
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        {showHomeLink && (
          <Link to="/" className="hover:text-gray-500">Home</Link>
        )}
        <Link to="/about" className="hover:text-gray-500">About</Link>
      </nav>

      {/* Mobile Menu Button */}
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>

        {/* Mobile Navigation */}
        {showMenu && (
          <div className="flex flex-col items-end mt-2 space-y-2">
            {showHomeLink && (
              <Link to="/" className="hover:text-gray-500">Home</Link>
            )}
            <Link to="/about" className="hover:text-gray-500">About</Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
