import { Link } from "react-router-dom";
import React from 'react';
import { FaUsers, FaLock, FaLanguage, FaCalendarAlt, FaCommentDots, FaGlobe } from 'react-icons/fa';
import Services from "../components/Services";
import FAQComponent from "../components/FAQ";

function About() {
  return (
    <div className="bg-white font-poppins text-gray-800">
      {/* Hero Section */}
      <section className="bg-neutral-100 pt-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-primary mb-4">
          About <span className="text-[#ff7043]">MyGoBuddy</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          Whether you're exploring a new city, settling into a new country, or just looking for someone to show you around — 
          MyGoBuddy connects you with trusted local Buddies who are ready to help.
        </p>
      </section>

      {/* Hero Section2 */}
      <section className="bg-[#ffffff] py-16 px-10">
  <div>
    <div className="bg-[#E8F0F6] p-8 md:p-12 md:pb-12 pb-20 md:rounded-tr-[200px] md:rounded-br-[200px] md:rounded-tl-[10px] md:rounded-bl-[10px] rounded-tr-[10px] rounded-br-[200px] rounded-tl-[10px] rounded-bl-[200px] flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h3 className="text-xl md:text-4xl font-[900] text-[#0D405D]">
          Connecting Travelers with Trusted Locals, Everywhere.
        </h3>
        <p className="text-gray-800 text-justify mt-4 leading-relaxed text-sm md:text-base">
          MyGoBuddy makes travel easier, safer, and more enjoyable by connecting travelers with
          verified local buddies who are ready to help, guide, assist with tasks, or simply offer
          companionship wherever your journey takes you. Whether you're exploring a new city,
          relocating to a new place, or just need a helping hand, our trusted network of friendly and
          knowledgeable locals ensures you never feel lost or alone. Our mission is to make every trip
          smoother and more memorable by offering peace of mind, convenience, and the warmth of local hospitality.
        </p>
      </div>

      <div className="flex-1 flex justify-center md:justify-end md:mr-10 mt-6 md:mt-0">
        <img src="./public/assets/aboutus1.png" alt="Travel buddies" className="rounded-2xl object-cover w-[407px] h-[306px] md:rounded-b-2xl rounded-b-[200px]"/>
      </div>
    </div>
  </div>
</section>


      {/* Mission Section */}
    <section className="bg-[#ffffff] py-10 px-10">
      <div>
         <h2 className="text-center text-orange-500 font-extrabold text-2xl md:text-5xl mb-4">
          Our Mission
        </h2>
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          <div className="flex justify-end mr-10">
            <img src="./public/assets/mission1.png" alt="Travel buddies" className="rounded-2xl object-cover w-[407px] h-[306px]"/>
          </div>

          <div className="flex-1">
            <h3 className="text-xl md:text-4xl font-[900] text-[#0D405D]">
              Travel Smarter. Connect Locally. Experience More.
            </h3>
            <p className="text-gray-800 mt-4 leading-relaxed text-sm md:text-base">
              Our mission is to redefine the way people experience travel by seamlessly connecting them with a global network of verified local companions. 
              Through personalized assistance, authentic cultural exchange, and human-centered interactions, MyGoBuddy empowers travelers to navigate new environments with confidence, 
              enrich their journeys with meaningful connections, and access local knowledge that fosters deeper understanding and enjoyment. 
              We are committed to creating a world where every traveler feels supported, engaged, and welcomed — wherever their path leads.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <Services />

    {      /* adventure Section */}
      <section className="bg-[#ffffff] py-16 px-10 bg-[url('./public/assets/adventure.png')] bg-auto bg-center h-screen bg-no-repeat">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 mt-24">
            <h3 className="text-xl md:text-4xl font-[900] text-[#ffffff] text-center">
              Your Adventure Starts Here
            </h3>
            <p className="text-[#ffffff] mt-4 leading-relaxed text-sm md:text-base text-center">
              Wherever you go, there’s a local friend waiting to make your trip better.
            </p>

            {/* Desktop CTA Button */}
                <div className="hidden lg:flex items-center justify-center w-full pt-16">
                  <Link 
                    to="/signup" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg 
                    font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Let’s Get Started
                  </Link>
                </div>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold font-montserrat text-primary mb-10">
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
        <h3 className="text-2xl font-semibold mb-4">
          Ready to meet your personal assistant?
        </h3>
        <Link
          to="/buddies"
          className="inline-block bg-[#ff7043] hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium shadow transition"
        >
          Meet Our Buddies
        </Link>
      </section>

      {/* FAQ Section */}
      <section className=" pt-20 pb-24">
        <FAQComponent />
      </section>
    </div>
  );
}

export default About;
