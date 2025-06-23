import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

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
    <div className="min-h-screen bg-light flex items-center justify-center px-4 py-12 relative font-poppins text-textPrimary">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main card */}
        <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-3xl p-8 border border-neutral">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-2">Welcome Back</h2>
            <p className="text-dark font-medium">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark">
                Email Address
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-neutral rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition placeholder-neutral"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-dark">
                Password
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-secondary" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-12 py-3 border border-neutral rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition placeholder-neutral"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-secondary hover:text-primary transition"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Forgot password link */}
            <div className="text-right">
              <a href="#" className="text-secondary hover:text-primary font-semibold text-sm transition">
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition duration-200 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Sign up link */}
          <p className="text-center text-sm text-dark mt-8">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-secondary hover:text-primary transition">
              Sign up
            </Link>
          </p>
        </div>

        {/* Footer text */}
        <p className="text-center text-xs text-neutral mt-6">
          By signing in, you agree to our{" "}
          <a href="#" className="hover:text-primary transition">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="hover:text-primary transition">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
