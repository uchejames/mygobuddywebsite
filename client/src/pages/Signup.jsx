import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    userType: "client", // default to client
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering user:", form);
    // TODO: connect to backend API
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        {/* User Type Selector */}
        <select
          name="userType"
          value={form.userType}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="client">I'm looking for a service</option>
          <option value="buddy">I want to become a buddy</option>
        </select>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-secondary hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}

export default Signup;
