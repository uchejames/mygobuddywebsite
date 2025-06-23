import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  MapPin, 
  Users, 
  Shield, 
  Clock, 
  Star, 
  MessageCircle,
  Globe,
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import Buddy from "../components/BuddyCard";
import FAQComponent from "../components/Faq";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/buddies?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      title: "Local Expertise",
      description: "Connect with locals who know their city inside and out"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Verified Buddies",
      description: "All our buddies are verified and background checked"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "24/7 Support",
      description: "Get help whenever you need it, day or night"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Personalized Experience",
      description: "Tailored recommendations based on your interests"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York",
      rating: 5,
      text: "My buddy helped me navigate the city like a local! Couldn't have asked for better guidance.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "Tokyo",
      rating: 5,
      text: "Amazing experience! My buddy showed me hidden gems I never would have found on my own.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      location: "Barcelona",
      rating: 5,
      text: "Professional, friendly, and incredibly knowledgeable. Made my trip unforgettable!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Search & Discover",
      description: "Find verified local buddies in your destination"
    },
    {
      step: "2",
      title: "Connect & Chat",
      description: "Message your chosen buddy and plan your experience"
    },
    {
      step: "3",
      title: "Explore Together",
      description: "Meet up and discover the city with your local guide"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Your Friendly Local
                <span className="text-orange-500 block">Companion</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connect with trusted local buddies who are ready to help you explore, 
                settle in, or discover hidden gems in any city around the world.
              </p>
            </div>

            {/* Search Section */}
            <div className="max-w-1.8xl mx-auto pt-8">
              <SearchBar
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Where do you need help?"
                onSearch={handleSearch}
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">10K+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-600">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">2K+</div>
                <div className="text-gray-600">Verified Buddies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MyGoBuddy?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We connect you with the right people to make your journey memorable and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-6 mb-4 group-hover:bg-orange-50 transition-colors">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Getting started with MyGoBuddy is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 w-6 h-6 text-orange-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Buddies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Buddies
            </h2>
            <p className="text-lg text-gray-600">
              Meet some of our top-rated local companions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Render dynamic <Buddy /> cards here */}
          </div>

          <div className="text-center">
            <Link
              to="/buddies"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              View All Buddies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from travelers around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of travelers who've discovered the world with local buddies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/buddies"
              className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Find Your Buddy
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=" pt-20 pb-24">
        <FAQComponent />
      </section>
    </div>
  );
}

export default Home;