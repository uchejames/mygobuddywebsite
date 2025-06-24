import React from "react";
import { UserPlus, Search, CalendarCheck, MessageCircle, Handshake, SquarePen, CheckCircle } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-orange-500" />,
      title: "1. Create an Account",
      description:
        "Sign up in just a few seconds and set up your profile so we can match you with the right buddy.",
    },
    {
      icon: <Search className="w-8 h-8 text-orange-500" />,
      title: "2. Find a Buddy",
      description:
        "Search or browse through our verified buddies based on your task, location, or preferences.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-orange-500" />,
      title: "3. Book Your Buddy",
      description:
        "Choose a buddy, Schedule a time and confirm your booking.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
      title: "4. Connect & Chat",
      description:
        "Start a conversation, ask questions, or schedule a task. Our buddies are always ready to help.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-orange-500" />,
      title: "5. Meet and Enjoy",
      description:
        "Meet your buddy and enjoy a safe, friendly experience.",
    },
    {
      icon: <SquarePen className="w-8 h-8 text-orange-500" />,
      title: "6. Leave a Review",
      description:
        "Choose a buddy, Schedule a time and confirm your booking.",
    },
  ];

  return (
    <div className="bg-white text-[#0D405D] px-6 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How <span className="text-orange-500">MyGoBuddy</span> Works
        </h1>
        <p className="text-[#0D405D] max-w-2xl mx-auto text-lg">
          Getting started with your personal assistant is simple, fast, and efficient. Follow these quick steps and let us handle the rest.
        </p>
      </section>

      {/* Steps */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-blue-50 bg-opacity-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center mb-4 gap-4">
              <div className="bg-orange-50 p-3 rounded-full">{step.icon}</div>
              <h2 className="text-xl font-semibold text-[#0D405D]">
                {step.title}
              </h2>
            </div>
            <p className="text-[#0D405D]">{step.description}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <h2 className="text-[#0D405D] font-bold mt-12 text-sm md:text-2xl text-center">
          Ready To find Your Local Buddy?
        </h2>

      <div className="text-center mt-6">
        <a href="/browse-buddies" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-300 inline-block">
          Find a Buddy Now
        </a>
      </div>
    </div>
  );
}

export default HowItWorks;