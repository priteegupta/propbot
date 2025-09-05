// src/services/api.js
export const getPropertyListings = async () => {
  const res = await fetch('https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing');
  return res.json();
};
