import React from 'react';
import {
  FaUsers,
  FaLock,
  FaLanguage,
  FaCalendarAlt,
  FaCommentDots,
  FaGlobe,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaUsers size={24} className="text-white" />,
    title: 'Local Buddies',
    description: 'Friendly locals for tours, errands, and companionship.',
  },
  {
    icon: <FaLock size={24} className="text-white" />,
    title: 'Safe Bookings',
    description: 'Verified profiles, background checks, and real-time updates.',
  },
  {
    icon: <FaLanguage size={24} className="text-white" />,
    title: 'Multilingual Support',
    description: 'Built for global travelers in multiple languages.',
  },
  {
    icon: <FaCalendarAlt size={24} className="text-white" />,
    title: 'Easy Scheduling',
    description: 'Book from your dashboard in just a few clicks.',
  },
  {
    icon: <FaCommentDots size={24} className="text-white" />,
    title: 'Real Reviews',
    description: 'Read feedback before booking your Buddy.',
  },
  {
    icon: <FaGlobe size={24} className="text-white" />,
    title: 'Cultural Guidance',
    description: 'Understand local customs, etiquette, and social practices.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-5xl font-bold text-secondary mb-2">
          Services We Offer
        </h2>
        <p className="text-gray-600 mb-12 text-sm md:text-2xl">
          More than Just a Service – It's a Human Experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0C5B7E] text-white p-10 rounded-tl-[60px] rounded-br-[60px] flex flex-col items-center text-center transition hover:shadow-lg hover:scale-105 duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="font-bold text-base mb-2">{service.title}</h4>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

