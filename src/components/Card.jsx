// src/components/Card.jsx
export default function Card({ property }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-bold">{property.name}</h3>
      <p className="text-sm">{property.city}, {property.country}</p>
      <p className="text-blue-800 font-bold mt-1">${property.buildingNumber}000</p>
      <p className="text-xs mt-1">By {property.ownerName}</p>
      <button className="mt-2 px-2 py-1 text-white bg-blue-700 rounded">Contact</button>
    </div>
  );
}
