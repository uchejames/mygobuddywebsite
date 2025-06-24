import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-trns.png";
 
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/how-it-works", label: "How it works" },
    { to: "/buddies", label: "Browse Buddies" },
    { to: "/contact", label: "Contact Us" },
    { to: "/FAQ", label: "FAQ" }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMenu}>
            <img src={logo} alt="MyGoBuddy Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-orange-600 bg-orange-50"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              to="/signup" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Become a Buddy
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-96 opacity-100 visible" 
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}>
          <nav className="py-4 space-y-1 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-orange-600 bg-orange-50 border-l-4 border-orange-500"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4 px-4">
              <Link 
                to="/signup"
                onClick={closeMenu}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Become a Buddy
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;