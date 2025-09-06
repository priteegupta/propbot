// src/components/PropertyListCard.jsx
export default function PropertyListCard({ property }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img
        src={property.image} // Always use API-provided image first
        alt={property.name}
        className="w-full h-40 object-cover rounded"
        onError={(e) => {
          // Fallback only if API image fails (e.g., 500 error) - this is error handling, not manual addition
          e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
          e.target.onerror = null; // Prevent infinite loop
        }}
      />
      <h3 className="font-bold mt-2">{property.name}</h3>
      <p>
        {property.city}, {property.country}
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-800 font-bold">
          ${property.buildingNumber}000
        </span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Details
        </button>
      </div>
    </div>
  );
}
