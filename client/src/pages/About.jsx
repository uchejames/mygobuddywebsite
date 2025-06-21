import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white font-poppins text-primary">
      {/* Hero Section */}
      <section className="bg-light py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
          About <span className="text-button">MyGoBuddy</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-700 text-lg">
          Your personal smart assistant platform designed to help you stay productive, connected, and empowered—wherever you are.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold font-montserrat">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At <strong>MyGoBuddy</strong>, we believe that everyone deserves an extra hand in today’s fast-paced world. Our platform connects users with helpful buddies—real or AI-powered—who assist with tasks, provide answers, and enhance day-to-day productivity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're a student, professional, or small business owner, MyGoBuddy is your reliable support system.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/featured/?team,technology"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-semibold font-montserrat mb-6 text-center">
            Our Values
          </h2>
          <ul className="grid md:grid-cols-3 gap-6 text-center">
            <li className="bg-neutral rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-button">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We thrive on solving problems through smart technology and thoughtful design.
              </p>
            </li>
            <li className="bg-neutral rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-button">Support</h3>
              <p className="text-gray-600 text-sm">
                MyGoBuddy is built to be your dependable companion—anytime, anywhere.
              </p>
            </li>
            <li className="bg-neutral rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2 text-button">Trust</h3>
              <p className="text-gray-600 text-sm">
                Your privacy and reliability mean everything to us. We’re here to serve with integrity.
              </p>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <Link
            to="/browse-buddies"
            className="inline-block bg-secondary hover:bg-primary text-white font-semibold px-8 py-3 rounded-full transition duration-300"
          >
            Meet Our Buddies
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
