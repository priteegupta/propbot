// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <span className="font-bold text-xl">PropBot</span>
      <div>
        <Link className="mx-2" to="/">Home</Link>
        <Link className="mx-2" to="/listings">Buy</Link>
        <Link className="mx-2" to="/listings">Rent</Link>
        <Link className="mx-2" to="/about">About Us</Link>
        <Link className="mx-2" to="/contact">Contact Us</Link>
        {isLoggedIn ?
          (<button className="ml-4 px-4 py-2 bg-blue-700 text-white rounded" onClick={handleLogout}>Logout</button>) :
          (<Link className="ml-4 px-4 py-2 bg-blue-700 text-white rounded" to="/login">Login / Register</Link>)
        }
      </div>
    </nav>
  );
}
