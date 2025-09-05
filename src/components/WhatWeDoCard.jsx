// src/components/WhatWeDoCard.jsx
export default function WhatWeDoCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center bg-white rounded shadow p-4 w-full md:w-1/4">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
