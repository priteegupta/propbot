
import { useState } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 w-full max-w-md mt-16">
        <h2 className="text-2xl font-bold mb-4 text-center">Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e=>setName(e.target.value)}
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-2 my-2 border rounded" required />
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="Enter Your Email Id"
            className="w-full px-4 py-2 my-2 border rounded" required />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="w-full px-4 py-2 my-2 border rounded" required />
          <input type="password" value={cPassword} onChange={e=>setCPassword(e.target.value)}
            placeholder="Confirm Your Password"
            className="w-full px-4 py-2 my-2 border rounded" required />
          <button type="submit" className="w-full bg-blue-700 text-white py-2 mt-2 rounded">Create Account</button>
        </form>
        {error && <div className="text-red-600 mt-2">{error}</div>}
        <div className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-700 font-bold">Log In</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
