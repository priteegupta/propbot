// src/components/Newsletter.jsx
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Thank you for subscribing!");
    setEmail("");
  };
  return (
    <div className="bg-blue-100 p-6 rounded shadow mt-6 flex flex-col items-center">
      <h3 className="font-bold text-xl mb-2">Get in Touch with Us</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          required
          className="px-4 py-2 rounded border"
        />
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {msg && <span className="text-green-700 mt-2">{msg}</span>}
    </div>
  );
}
