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

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-neutral"></div>
            <span className="px-4 text-sm text-primary bg-white rounded-full">or</span>
            <div className="flex-1 border-t border-neutral"></div>
          </div>

          {/* Social login */}
          <button className="w-full flex items-center justify-center px-4 py-3 border border-neutral rounded-xl bg-white hover:bg-neutral transition duration-200 group">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-textPrimary font-semibold">Continue with Google</span>
          </button>

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
