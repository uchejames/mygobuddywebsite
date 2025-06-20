import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MyGoBuddy
      </Link>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
