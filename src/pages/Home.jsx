
import { useEffect, useState } from "react";
import Card from "../components/Card";
import PropertyListCard from "../components/PropertyListCard";
import Newsletter from "../components/Newsletter";
import WhatWeDoCard from "../components/WhatWeDoCard";
import Footer from "../components/Footer";
import { getPropertyListings } from "../services/api";
import { FaHome, FaSearch, FaRegHandshake, FaTags } from "react-icons/fa";
import  { Search } from "lucide-react";

export default function Home() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
  getPropertyListings().then(data => {
    console.log("API data →", data);   // <-- check image values
    setProperties(data);
  });
}, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full bg-white rounded-[2rem] shadow-xl mt-6 mx-auto relative overflow-hidden flex flex-col items-center max-w-5xl">
  {/* Banner Image */}
  <img 
    src="https://picsum.photos/seed/homepage/1200/400"
    alt="Property Banner"
    className="w-full rounded-t-[2rem] object-cover h-72"
  />
  {/* Overlay Headline */}
  <div className="absolute top-20 left-0 w-full flex flex-col items-center z-10">
    <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
      Find Your Dream Home in One Click!
    </h1>
    <p className="text-lg text-white mb-8 drop-shadow">
      Discover, Buy, or Rent Verified Properties with Ease.
    </p>
  </div>
  {/* Search Controls Card */}
  <div className="w-[90%] bg-white rounded-xl shadow-lg -mt-14 px-7 py-6 flex flex-col items-center z-20">
    <form className="flex flex-wrap gap-4 justify-center w-full">
      <input
        type="text"
        placeholder="Search Location..."
        className="flex-grow min-w-[180px] px-4 py-3 rounded-xl border outline-none bg-gray-100"
      />
      <select className="px-4 py-3 rounded-xl border bg-gray-100">
        <option>For Rent</option>
        <option>For Sale</option>
      </select>
      <select className="px-4 py-3 rounded-xl border bg-gray-100">
        <option>House</option>
        <option>Apartment</option>
        <option>Villa</option>
      </select>
      <select className="px-4 py-3 rounded-xl border bg-gray-100">
        <option>Indonesia</option>
        <option>India</option>
        <option>USA</option>
      </select>
      <button className="bg-blue-900 text-white px-7 py-3 rounded-xl font-semibold">
        Find Property
      </button>
    </form>
    <button className="absolute right-10 top-7 bg-white text-blue-900 border px-6 py-2 rounded-xl font-semibold shadow-md z-30">
      List Your Property
    </button>
  </div>
</div>

      {/* What We Do Section */}
      <section className="py-8 bg-white">
  <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">What We Do?</h2>
  <p className="text-center text-gray-600 mb-6">
    Helping you find, buy, and rent the perfect property with ease.
  </p>
  <div className="flex flex-wrap gap-4 justify-center">
    <WhatWeDoCard icon={<FaHome />} title="Buy & Sell" desc="Trusted property solutions" />
    <WhatWeDoCard icon={<FaSearch />} title="Find Rental" desc="Wide range of rental options" />
    <WhatWeDoCard icon={<FaRegHandshake />} title="Consultation" desc="Expert real estate advice" />
    <WhatWeDoCard icon={<FaTags />} title="Sale & Deals" desc="Exciting property deals" />
  </div>
</section>


      {/* Featured Properties */}
      <section className="py-8 bg-gray-100">
        <div className="flex justify-between items-center mb-2 px-2">
        <h2 className="text-center font-bold text-xl mb-4">Featured Property</h2>
        <button className="bg-blue-600 text-white rounded px-4 py-2">See More Projects</button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {properties.slice(0, 3).map(p => <Card key={p.id} property={p} />)}
        </div>
      </section>

      {/* Best Properties for Sale */}
      <section className="py-8 bg-white">
  <div className="flex justify-between items-center mb-2 px-2">
    <h2 className="font-bold text-xl">Best Properties Available For Sale</h2>
    <button className="bg-blue-600 text-white rounded px-4 py-2">View More Properties</button>
  </div>
  <div className="mb-6 px-2 text-gray-500 text-sm">
    Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!
  </div>
  <div className="flex flex-wrap gap-4 justify-center">
    {properties.filter(p => p.cardinalDirection === "South").slice(0, 4).map(p =>
      <PropertyListCard key={p.id} property={p} />
    )}
  </div>
</section>


      {/* Rental Properties */}
     <section className="py-8 bg-gray-100">
  <div className="flex justify-between items-center mb-2 px-2">
    <h2 className="font-bold text-xl">Find The Perfect Rental Home</h2>
    <button className="bg-blue-600 text-white rounded px-4 py-2">View All Rentals</button>
  </div>
  <div className="mb-6 px-2 text-gray-500 text-sm">
    Browse our top-rated properties for rent, with listings tailored to your needs. Find your ideal rental instantly!
  </div>
  <div className="flex flex-wrap gap-4 justify-center">
    {properties.filter(p => p.cardinalDirection === "East").slice(0, 4).map(p =>
      <PropertyListCard key={p.id} property={p} />
    )}
  </div>
</section>



{/* Start Your Journey Today Section */}
<section className="py-8 bg-white">
  <h2 className="font-bold text-xl mb-2">Start Your Journey Today!</h2>
  <div className="mb-6 text-gray-500 text-sm">
    Create a profile in seconds and find your ideal home.
  </div>
  <form className="flex gap-2 flex-wrap justify-center">
    <input type="text" placeholder="Enter Your Name" className="px-3 py-2 rounded border" />
    <select className="px-3 py-2 rounded border">
      <option>Select User Type</option>
      <option>Buyer</option>
      <option>Renter</option>
    </select>
    <input type="text" placeholder="Enter Your Location" className="px-3 py-2 rounded border" />
    <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">Continue</button>
  </form>
</section>




      {/* Newsletter */}
      <Newsletter />
<section className="py-10 bg-white flex flex-col items-center">
  <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl items-center">
    {/* LEFT: IMAGE */}
    <img
      src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
      alt="Property feature"
      className="rounded-xl shadow-lg w-full h-64 object-cover"
    />
    {/* RIGHT: FEATURES */}
    <div>
      <h3 className="text-2xl font-bold mb-6 text-gray-900">
        We Provide Latest Properties For Our Valuable Clients
      </h3>
      <ul className="space-y-6">
        <li className="flex items-start gap-3">
          {/* Budget icon: money/credit card */}
          <span className="text-blue-700 text-2xl mt-1">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V8a5 5 0 00-10 0v1M2 13h20a2 2 0 012 2v4a2 2 0 01-2 2H2a2 2 0 01-2-2v-4a2 2 0 012-2z" />
            </svg>
          </span>
          <div>
            <div className="font-bold text-lg text-gray-800">Budget Friendly</div>
            <div className="text-gray-600 mt-1 text-sm">
              Lorem ipsum dolor sit amet consectetur. Vivamus sed eu egestas sem. Letus quis premium results and value.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          {/* Trusted icon: shield */}
          <span className="text-blue-700 text-2xl mt-1">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6c-3.86 0-7 1.28-7 4s3.14 4 7 4 7-1.28 7-4-3.14-4-7-4z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v6m0 0h-6m6 0h6"/>
            </svg>
          </span>
          <div>
            <div className="font-bold text-lg text-gray-800">Trusted By Thousand</div>
            <div className="text-gray-600 mt-1 text-sm">
              Lorem ipsum dolor sit amet consectetur. Vivamus sed eu egestas sem. Letus quis premium results and value.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          {/* Location icon */}
          <span className="text-blue-700 text-2xl mt-1">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 19.25l-7-7A7 7 0 0112 5a7 7 0 017 7.25l-7 7z" />
            </svg>
          </span>
          <div>
            <div className="font-bold text-lg text-gray-800">Prime Location</div>
            <div className="text-gray-600 mt-1 text-sm">
              Lorem ipsum dolor sit amet consectetur. Vivamus sed eu egestas sem. Letus quis premium results and value.
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
      

      {/* Footer */}
      <Footer />
    </div>
  );
}
