// src/components/PropertyListCard.jsx
export default function PropertyListCard({ property }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded" />
      <h3 className="font-bold mt-2">{property.name}</h3>
      <p>{property.city}, {property.country}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-800 font-bold">${property.buildingNumber}000</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Details</button>
      </div>
    </div>
  );
}
