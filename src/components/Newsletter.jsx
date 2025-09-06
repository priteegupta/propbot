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
    <section className="bg-blue-800 py-8 flex flex-col items-center w-full">
      <h2 className="text-white text-xl font-bold mb-2">Get in Touch with Us</h2>
      <p className="text-white mb-4 text-center">
        Subscribe now for exclusive property insights and deals!
      </p>
      <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 justify-center">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          required
          className="p-3 rounded w-2/3"
        />
        <button type="submit" className="bg-white text-blue-800 px-6 py-3 rounded font-semibold">Submit</button>
      </form>
      {msg && <span className="text-green-200 mt-2">{msg}</span>}
    </section>
  );
}
