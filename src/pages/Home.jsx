
import { useEffect, useState } from "react";
import Card from "../components/Card";
import PropertyListCard from "../components/PropertyListCard";
import Newsletter from "../components/Newsletter";
import WhatWeDoCard from "../components/WhatWeDoCard";
import Footer from "../components/Footer";
import { getPropertyListings } from "../services/api";
import { FaHome, FaSearch, FaRegHandshake, FaTags } from "react-icons/fa";

export default function Home() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    getPropertyListings().then(setProperties);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white p-8 text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Your Dream Home in One Click!</h1>
        <form className="flex gap-4 mb-4 flex-wrap justify-center">
          <input type="text" placeholder="Search by Location" className="px-3 py-2 rounded"/>
          <select className="px-3 py-2 rounded">
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
          <button className="bg-white text-blue-900 px-5 py-2 rounded font-semibold">Find Property</button>
        </form>
        <img src="https://picsum.photos/seed/homepage/600/200" alt="banner" className="rounded shadow-lg mt-4"/>
      </div>

      {/* What We Do Section */}
      <section className="flex flex-wrap gap-4 justify-center py-8">
        <WhatWeDoCard icon={<FaHome />} title="Buy & Sell" desc="Trusted property solutions" />
        <WhatWeDoCard icon={<FaSearch />} title="Find Rental" desc="Wide range of rental options" />
        <WhatWeDoCard icon={<FaRegHandshake />} title="Consultation" desc="Expert real estate advice" />
        <WhatWeDoCard icon={<FaTags />} title="Sale & Deals" desc="Exciting property deals" />
      </section>

      {/* Featured Properties */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-center font-bold text-xl mb-4">Featured Property</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {properties.slice(0, 3).map(p => <Card key={p.id} property={p} />)}
        </div>
      </section>

      {/* Best Properties for Sale */}
      <section className="py-8">
        <h2 className="text-center font-bold text-xl mb-4">Best Properties Available For Sale</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {properties.filter(p=>p.cardinalDirection==='South').slice(0,4).map(p=>
            <PropertyListCard key={p.id} property={p} />
          )}
        </div>
      </section>

      {/* Rental Properties */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-center font-bold text-xl mb-4">Find The Perfect Rental Home</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {properties.filter(p=>p.cardinalDirection==='East').slice(0,4).map(p=>
            <PropertyListCard key={p.id} property={p} />
          )}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
