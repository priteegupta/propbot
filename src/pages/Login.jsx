// src/pages/Login.jsx
import { useState } from "react";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
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
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center py-8">
        {/* Top bar */}
        <div className="flex justify-between items-center w-full max-w-3xl px-2 py-4">
          <Link to="/" className="border px-4 py-1 rounded-full text-gray-700 hover:bg-gray-200">← Back to Homepage</Link>
          <span className="font-bold text-xl"><span className="inline-block align-middle"></span> PropBot</span>
          <Link to="/about" className="bg-blue-700 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-blue-600">About Us ➔</Link>
        </div>
        {/* Card/Row */}
        <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden mt-4">
          {/* Form side */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-semibold text-sm">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  placeholder="Enter Your Email Id"
                  className="w-full px-4 py-3 border-2 rounded-lg mt-2 font-medium"
                  required
                />
              </div>
              <div className="relative">
                <label className="font-semibold text-sm">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 border-2 rounded-lg mt-2 font-medium"
                  required
                />
                <Link to="/forgot-password" className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xs text-blue-700 hover:underline font-medium mr-2">
                  Forgot Password?
                </Link>
              </div>
              <div className="flex items-center mb-2 mt-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-700">Remember Me</label>
              </div>
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold text-lg">Log In</button>
            </form>
            {error && <div className="text-red-600 mt-3">{error}</div>}
            <div className="flex flex-col items-center mt-6">
              <span className="mb-2 text-sm text-gray-400">OR CONTINUE WITH</span>
              <div className="flex gap-6">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" className="w-6 h-6" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-6 h-6" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-8 text-center text-sm">
              Doesn't have an account? <Link to="/signup" className="text-blue-700 font-bold underline">Create One</Link>
            </div>
          </div>
          {/* Image side */}
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80"
              alt="Login Side"
              className="w-full h-full object-cover rounded-r-2xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}