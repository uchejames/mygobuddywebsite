import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, UserPlus } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    userType: "client",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create account
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (authError) {
      toast.error("Signup failed: " + authError.message);
      return;
    }

    const user = authData.user;
    if (!user) {
      toast.error("User not returned from signup.");
      return;
    }

    // Insert profile
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: user.id,
        name: form.fullname,
        email: form.email,
        userType: form.userType,
      },
    ]);

    if (profileError) {
      toast.error("Profile creation failed: " + profileError.message);
      return;
    }

    toast.success("Account created successfully!");

    // Redirect after short delay
    setTimeout(() => {
      navigate(`/${form.userType}-dashboard`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-4 py-12 relative font-poppins text-textPrimary">
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main card */}
        <div className="bg-white/80 backdrop-blur-xl shadow-lg rounded-3xl p-8 border border-neutral">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4 shadow-lg">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-2">Create Account</h2>
            <p className="text-dark font-medium">Join our community today</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label htmlFor="fullname" className="block text-sm font-semibold text-dark">
                Full Name
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-secondary" />
                </div>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-neutral rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition placeholder-gray"
                />
              </div>
            </div>

            {/* Email */}
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
                  className="w-full pl-10 pr-4 py-3 border border-neutral rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition placeholder-gray"
                />
              </div>
            </div>

            {/* Password */}
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
                  className="w-full pl-10 pr-12 py-3 border border-neutral rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition placeholder-gray"
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

            {/* User Type */}
            <fieldset className="space-y-3">
              <legend className="block text-sm font-semibold text-dark">I'm signing up to:</legend>
              <div className="grid grid-cols-1 gap-3 mt-1">
                {[
                  {
                    value: "client",
                    title: "Find a service buddy",
                    description: "Looking for help with services",
                  },
                  {
                    value: "buddy",
                    title: "Offer services as a buddy",
                    description: "Provide help to others",
                  },
                ].map(({ value, title, description }) => (
                  <label key={value} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      value={value}
                      checked={form.userType === value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3 ${
                        form.userType === value
                          ? "border-secondary bg-secondary/20 shadow-md"
                          : "border-neutral bg-white hover:border-secondary"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          form.userType === value ? "border-secondary" : "border-neutral"
                        }`}
                      >
                        {form.userType === value && (
                          <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-textPrimary">{title}</p>
                        <p className="text-sm text-dark">{description}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition duration-200 active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-dark mt-8">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-secondary hover:text-primary transition">
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-neutral mt-6">
          By creating an account, you agree to our{" "}
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

export default Signup;
