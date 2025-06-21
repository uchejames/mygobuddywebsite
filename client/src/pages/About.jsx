import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white font-poppins text-gray-800">
      {/* Hero Section */}
      <section className="bg-neutral-100 py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-4">
          About <span className="text-[#ff7043]">MyGoBuddy</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          Your personal smart assistant platform designed to keep you productive,
          connected, and empowered—wherever you are.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold font-montserrat text-primary">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-base">
            At <strong>MyGoBuddy</strong>, we believe in empowering individuals through
            smart assistance. Our platform connects users with real or AI-powered
            buddies who help with everyday tasks, provide guidance, and boost productivity.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            Whether you’re a student, entrepreneur, or busy professional,
            MyGoBuddy is your always-available helping hand.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://source.unsplash.com/featured/?people,technology,teamwork"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold font-montserrat text-primary mb-10">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-xl shadow p-6 transition hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#ff7043] mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We’re passionate about solving real-world problems through innovative
                technology and design.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 transition hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#ff7043] mb-2">Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every user matters. We are your dependable companion—day or night.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 transition hover:shadow-lg">
              <h3 className="text-lg font-semibold text-[#ff7043] mb-2">Trust</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We prioritize your privacy and security while providing consistent and
                transparent support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Ready to meet your personal assistant?
        </h3>
        <Link
          to="/browse-buddies"
          className="inline-block bg-[#ff7043] hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium shadow transition"
        >
          Meet Our Buddies
        </Link>
      </section>
    </div>
  );
}

export default About;
