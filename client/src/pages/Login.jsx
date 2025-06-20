import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", form);
    // TODO: connect to backend API
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
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

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition"
        >
          Log In
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-secondary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
