import { Link } from "react-router-dom";
import logo from "../assets/logo-trns.png";
 
function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-3 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="MyGoBuddy Logo" className="h-12 mr-2" />
      </Link>
      <nav className="flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">About Us</Link>
        <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 font-medium">How it works</Link>
        <Link to="/buddies" className="text-gray-700 hover:text-gray-900 font-medium">Browse Buddies</Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact Us</Link>
        <Link 
          to="/signup" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
        >
          Become a Buddy
        </Link>
      </nav>
    </header>
  );
}

export default Header;