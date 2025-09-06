import { useState } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== cPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch {
      setError("Error creating account");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center py-8">
        {/* Top nav row */}
        <div className="flex justify-between items-center w-full max-w-3xl px-2 py-4">
          <Link to="/" className="border px-4 py-1 rounded-full text-gray-700 hover:bg-gray-200">← Back to Homepage</Link>
          <span className="font-bold text-xl"><span className="inline-block align-middle"></span> PropBot</span>
          <Link to="/about" className="bg-blue-700 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-blue-600">About Us ➔</Link>
        </div>
        {/* Card-like 2-column area */}
        <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden mt-4">
          {/* Signup form */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-center">Create new account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-semibold text-sm">Name</label>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}
                  placeholder="Enter Your Full Name"
                  className="w-full px-4 py-3 border-2 rounded-lg mt-2 font-medium" required />
              </div>
              <div>
                <label className="font-semibold text-sm">Email Address</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                  placeholder="Enter Your Email Id"
                  className="w-full px-4 py-3 border-2 rounded-lg mt-2 font-medium" required />
              </div>
              <div>
                <label className="font-semibold text-sm">Password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 border-2 rounded-lg mt-2 font-medium" required />
              </div>
              <div>
                <label className="font-semibold text-sm">Confirm Password</label>
                <input type="password" value={cPassword} onChange={e=>setCPassword(e.target.value)}
                  placeholder="Confirm Your Password"
                  className="w-full px-4 py-3 border-2 rounded-lg mt-2 font-medium" required />
              </div>
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 mt-2 rounded-lg font-semibold text-lg">Create Account</button>
            </form>
            {error && <div className="text-red-600 mt-3">{error}</div>}
            <div className="mt-6 text-center text-sm">
              Already have an account? <Link to="/login" className="text-blue-700 font-bold underline">Log In</Link>
            </div>
          </div>
          {/* Image side */}
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80"
              alt="Signup Side"
              className="w-full h-full object-cover rounded-r-2xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}