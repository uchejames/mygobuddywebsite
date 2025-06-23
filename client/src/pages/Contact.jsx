import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import FAQComponent from "../components/Faq";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", form);
    // Connect to backend/email service
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 font-poppins text-gray-800">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We’re here to help and answer any question you might have.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-[#ff7043] text-2xl mt-1" />
            <div>
              <p className="font-semibold text-lg">Email</p>
              <a
                href="mailto:uchejamesjac@gmail.com"
                className="text-gray-600 hover:text-[#ff7043] transition"
              >
                uchejamesjac@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhone className="text-[#ff7043] text-2xl mt-1" />
            <div>
              <p className="font-semibold text-lg">Phone</p>
              <a
                href="tel:+2349031234567"
                className="text-gray-600 hover:text-[#ff7043] transition"
              >
                +234 903 123 4567
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#ff7043] text-2xl mt-1" />
            <div>
              <p className="font-semibold text-lg">Address</p>
              <p className="text-gray-600">123 Main Street, City, Nigeria</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-lg font-semibold mb-4 text-primary">Follow Us</p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/yourprofile"
                className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full shadow-md transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com/yourprofile"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-md transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full shadow-md transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 space-y-6 border border-gray-100"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7043] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7043] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff7043] outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ff7043] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Send Message
          </button>
        </form>

        {/* FAQ Section */}
        <section className=" pt-20 pb-24">
          <FAQComponent />
        </section>

      </div>
    </div>
  );
}

export default Contact;
