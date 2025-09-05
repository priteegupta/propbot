// src/pages/Login.jsx
import { useState } from "react";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('user', JSON.stringify(res.user));
      setUser(res.user);
      navigate('/');
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md mt-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="Enter Your Email Id"
            className="w-full px-4 py-2 my-2 border rounded" required />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="w-full px-4 py-2 my-2 border rounded" required />
          <button type="submit" className="w-full bg-blue-700 text-white py-2 mt-2 rounded">Log In</button>
        </form>
        {error && <div className="text-red-600 mt-2">{error}</div>}
        <div className="mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-blue-700 font-bold">Create One</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
