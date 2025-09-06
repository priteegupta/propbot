import { useState, useEffect } from "react";
import PropertyListCard from "../components/PropertyListCard";
import Footer from "../components/Footer";
import { getPropertyListings } from "../services/api";

export default function Listings() {
  const [properties, setProperties] = useState([]);
  const [type, setType] = useState("All");

  useEffect(() => {
    getPropertyListings().then(setProperties);
  }, []);

  const filtered = type === "All"
    ? properties
    : properties.filter(p =>
        type === "Sale" ? p.status === "Sale" : p.status === "Rent"
      );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Banner */}
      <div className="w-full max-w-6xl mx-auto mt-8 rounded-3xl overflow-hidden shadow-lg relative">
        <img
          src="https://picsum.photos/1200/340?house"
          alt="Featured property banner"
          className="w-full h-72 object-cover rounded-3xl"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">Featured Properties For Sale</h1>
          <p className="text-lg text-white mb-6">Discover, Buy, or Rent Verified Properties with Ease.</p>
          {/* Search/Filter Bar */}
          <div className="flex bg-white rounded-full shadow-lg px-6 py-4 gap-4 items-center w-[85%] max-w-3xl justify-center mt-2">
            <select className="px-3 py-2 rounded-md border bg-gray-100 outline-none">
              <option>For Buying</option>
              <option>For Rent</option>
            </select>
            <select className="px-3 py-2 rounded-md border bg-gray-100 outline-none">
              <option>House</option>
              <option>Apartment</option>
            </select>
            <select className="px-3 py-2 rounded-md border bg-gray-100 outline-none">
              <option>Indonesia</option>
              <option>India</option>
            </select>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold shadow">
              Find Property
            </button>
          </div>
        </div>
      </div>

      {/* Featured Property Section */}
      <div className="max-w-6xl mx-auto pt-12 pb-6">
        <div className="flex justify-between items-center mb-6 px-2">
          <h2 className="text-2xl font-bold text-blue-900">Featured Property</h2>
          <button className="text-blue-900 bg-white border border-blue-900 px-5 py-2 rounded-full font-medium shadow hover:bg-blue-100 transition">See 208+ New Projects</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(p => (
            <PropertyListCard key={p.id} property={p} />
          ))}
        </div>
      </div>

      {/* Newsletter & Footer */}
      <div className="bg-blue-900 text-white py-12 mt-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-2 text-center">Get in Touch with Us</h3>
          <p className="text-lg mb-5 text-center">Subscribe now for exclusive property insights and deals!</p>
          <form className="flex gap-3 w-full justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full px-5 py-3 text-gray-900 bg-white w-[60%] min-w-[200px] outline-none"
            />
            <button className="bg-blue-600 text-white px-7 py-3 rounded-full font-semibold shadow">Submit</button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    
 
<div className="bg-blue-900 text-white py-4 px-8">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
    
    <div className="text-lg font-bold flex items-center">
      <span className="mr-2"></span>PropBot
    </div>
   
    <div className="flex gap-6 text-sm mb-2 md:mb-0">
      <a href="#" className="hover:underline">For Sale</a>
      <a href="#" className="hover:underline">Rentals</a>
      <a href="#" className="hover:underline">New Projects</a>
      <a href="#" className="hover:underline">Property News</a>
    </div>
    
    <div className="text-xs opacity-80 text-right">
      ©2025 Propbot. All rights reserved.
    </div>
  </div>
</div>
</div>
  );
}