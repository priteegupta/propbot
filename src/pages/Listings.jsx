// src/pages/Listings.jsx
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
        type === "Sale" ? p.cardinalDirection === "South" : p.cardinalDirection === "East"
      );

  return (
    <div>
      <div className="bg-blue-900 text-white text-center py-8">
        <h1 className="text-3xl font-bold">Featured Properties For Sale</h1>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={()=>setType("All")}
            className={`px-4 py-2 rounded ${type==="All"?'bg-white text-blue-900':'bg-blue-700 text-white'}`}>
            All
          </button>
          <button onClick={()=>setType("Sale")}
            className={`px-4 py-2 rounded ${type==="Sale"?'bg-white text-blue-900':'bg-blue-700 text-white'}`}>
            Sale
          </button>
          <button onClick={()=>setType("Rent")}
            className={`px-4 py-2 rounded ${type==="Rent"?'bg-white text-blue-900':'bg-blue-700 text-white'}`}>
            Rent
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center py-8">
        {filtered.map(p=><PropertyListCard key={p.id} property={p} />)}
      </div>
      <Footer />
    </div>
  );
}
