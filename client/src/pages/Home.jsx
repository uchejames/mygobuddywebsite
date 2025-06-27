import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
import BuddyCard from "../components/BuddyCard";
import buddies from "../data/buddies";
import FAQComponent from "../components/FAQ";
import Services from "../components/Services";

function Home() {
  const [showFirst, setShowFirst] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

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
      text: "MyGoBuddy made my solo trip to Mexico City unforgettable. My local Buddy was friendly, knew all the hidden gems, and made me feel safe. It's like traveling with a friend you've known for years. Really Helpful.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "Tokyo",
      rating: 5,
      text: "As someone who doesn't speak Spanish, I was worried about getting around. MyGoBuddy's multilingual support and helpful Buddy turned that around. I got help with errands and even went hiking with a local!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      location: "Barcelona",
      rating: 5,
      text: "I needed help exploring neighborhoods before deciding where to stay long-term. My Buddy not only guided me but also helped me connect with locals. This platform is a game-changer!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jack Williams",
      location: "Madrid",
      rating: 5,
      text: "My buddy helped me navigate the city like a local! Couldn't have asked for better guidance.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Fatima ",
      location: "Berlin",
      rating: 5,
      text: "Amazing experience! My buddy showed me hidden gems I never would have found on my own.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Alex Jasmine",
      location: "Hong Kong",
      rating: 5,
      text: "Professional, friendly, and incredibly knowledgeable. Made my trip unforgettable!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Browse Buddies",
      description: "Find Verified locals offering Help with various tasks."
    },
    {
      step: "2",
      title: "Book & Connect",
      description: "Schedule a service and communicate directly with my buddy."
    },
    {
      step: "3",
      title: "Enjoy & Explore",
      description: "Meet up for a personalized experience and make the most of your trip. "
    }
  ];
  

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/60 bg-[url('/public/assets/heroimage.png')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:pt-32 lg:pb-80">
          <div className="text-center space-y-8">
            <div className="space-y-4 transform transition duration-1000 ease-out opacity-0 animate-fade-slide-down">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#0D405D] leading-tight">
                Your Friendly Local Companion
                <span className="text-orange-500 block"> Anytime, Anywhere</span>
              </h1>
              <p className="text-lg md:text-xl text-primary/700 max-w-3xl mx-auto leading-relaxed">
                Whether you're exploring a new city, settling into a new country, or just looking for someone to show you around — 
                MyGoBuddy connects you with trusted local Buddies who are ready to help.
              </p>
            </div>

            <div className="max-w-1.8xl mx-auto pt-8 transform transition duration-1000 ease-out opacity-0 animate-fade-slide-up">
              <SearchBar
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Where do you need help?"
                onSearch={handleSearch}
              />
            </div>

            {/* Stats 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">10K+</div>
                <div className="text-white">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-white">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">2K+</div>
                <div className="text-white">Verified Buddies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">4.9</div>
                <div className="text-white">Average Rating</div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>
              
      <Services />


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
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
        <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
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
        <div data-aos="fade-up">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl font-bold text-secondary mb-4">
                Featured Buddies
              </h2>
              <p className="text-lg text-gray-600">
                Connect with trusted and verified local buddies ready to assist you
              </p>
            </div>
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 w-6xl mx-10 ">
              {buddies.slice(0, 3).map((buddy) => (
                <BuddyCard key={buddy.id} {...buddy} />
              ))}
            </div>


            <div className="text-center">
              <Link
                to="/buddies"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                View All Buddies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D405D] mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from travelers around the world
            </p>
          </div>

          <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation
              className="px-1"
            >

            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 h-fit bg-no-repeat bg-auto overflow-hidden" style={{ backgroundImage: "url('/public/assets/mountain1.png')" }}>
  <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none"></div>
  <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center my-10">
        {showFirst ? (
          <div key="message-1" className="transition-opacity duration-500 ease-in-out mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-2xl text-black mb-8">
              Join thousands of travelers who've discovered the world with local buddies.
            </p>
          </div>
        ) : (
          <div key="message-2" className="transition-opacity duration-500 ease-in-out">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              Let’s Find You A Buddy
            </h2>
            <p className="text-2xl text-black mb-8">
              Connect with verified mygobuddy individuals and get the best of your stay while exploring with confidence
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center my-12">
          <Link
            to="/buddies"
            className="bg-secondary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary transition-colors"
          >
            Find Your Buddy
          </Link>
          <Link
            to="/how-it-works"
            className="bg-white text-secondary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white hover:border-none transition-colors"
          >
            Learn More
          </Link>
        </div>
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