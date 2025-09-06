// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6 flex flex-col items-center w-full">
      <div className="mb-2 flex gap-4 text-sm">
        <span className="font-bold">PropBot</span>
        <span>Home</span>
        <span>Buy</span>
        <span>Rent</span>
        <span>About Us</span>
        <span>Contact Us</span>
      </div>
      <small>©2025 PropBot. All rights reserved.</small>
    </footer>
  );
}
