import { CalendarCheck, Heart, Share2, Shield, Award } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  MapPin,
  Globe,
  Star,
  Clock,
  Zap,
  CheckCircle2,
  MessageCircle,
  ArrowLeft,
  Camera,
  Phone,
  Video,
  DollarSign,
  Users,
  BadgeCheck,
  Calendar,
  ChevronRight
} from "lucide-react";
import buddies from "../data/buddies";

function BuddyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorited, setIsFavorited] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const buddy = buddies.find((b) => b.id.toString() === id);

  if (!buddy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <Star className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Buddy Not Found</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The buddy you're looking for doesn't exist or has been removed from our platform.
          </p>
          <button 
            onClick={() => navigate('/buddies')}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Buddies
          </button>
        </div>
      </div>
    );
  }

  const bio = buddy.bio || "Professional buddy available to guide, assist, and help you enjoy your journey in a new place. With extensive local knowledge and a passion for helping travelers, I'm here to make your experience unforgettable.";
  const truncatedBio = bio.length > 150 ? bio.substring(0, 150) + "..." : bio;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${buddy.name} - Travel Buddy`,
          text: `Check out ${buddy.name}, a travel buddy in ${buddy.location}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/buddies')}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Buddies</span>
            </button>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className={`p-2 rounded-full transition-all duration-200 ${
                  isFavorited 
                    ? 'bg-red-50 text-red-500 hover:bg-red-100' 
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-all duration-200"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Profile Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Enhanced Profile Header */}
                <div className="relative">
                  <div className="h-40 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {buddy.verified && (
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                          <BadgeCheck className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">Verified</span>
                        </div>
                      )}
                      <div className={`px-3 py-1 rounded-full flex items-center gap-1 ${
                        buddy.isOnline 
                          ? "bg-green-500/20 backdrop-blur-sm" 
                          : "bg-gray-500/20 backdrop-blur-sm"
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          buddy.isOnline ? "bg-green-400" : "bg-gray-300"
                        }`} />
                        <span className="text-white text-sm font-medium">
                          {buddy.isOnline ? "Online" : "Offline"}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-16 left-8">
                    <div className="relative">
                      <img
                        src={buddy.avatar}
                        alt={buddy.name}
                        className="w-32 h-32 rounded-2xl object-cover ring-4 ring-white shadow-xl"
                      />
                      {buddy.verified && (
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                          <CheckCircle2 className="w-6 h-6 text-blue-500" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="pt-20 pb-8 px-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{buddy.name}</h1>
                      <p className="text-lg text-gray-600 mb-3">{buddy.title}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{buddy.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="font-medium text-gray-900">{buddy.rating || "New"}</span>
                          <span>({buddy.reviewCount || 0} reviews)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{buddy.hourlyRate || "$25"}</div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="border-b border-gray-200 mb-6">
                    <nav className="flex space-x-8">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedTab(tab.id)}
                          className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                            selectedTab === tab.id
                              ? 'border-orange-500 text-orange-600'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Tab Content */}
                  {selectedTab === 'overview' && (
                    <div className="space-y-6">
                      {/* Bio */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-gray-700 leading-relaxed">
                            {showFullBio ? bio : truncatedBio}
                          </p>
                          {bio.length > 150 && (
                            <button
                              onClick={() => setShowFullBio(!showFullBio)}
                              className="text-orange-600 hover:text-orange-700 font-medium text-sm mt-2 inline-flex items-center gap-1"
                            >
                              {showFullBio ? 'Show Less' : 'Read More'}
                              <ChevronRight className={`w-3 h-3 transition-transform ${showFullBio ? 'rotate-90' : ''}`} />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Skills/Specialties */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h3>
                        <div className="flex flex-wrap gap-2">
                          {(buddy.skills || ['Local Guide', 'Photography', 'Food Tours', 'Adventure Sports']).map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium border border-orange-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {buddy.languages.map((language, index) => (
                            <div key={index} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                              <Globe className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-700 font-medium">{language}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === 'reviews' && (
                    <div className="text-center py-12">
                      <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No Reviews Yet</h3>
                      <p className="text-gray-500">Be the first to leave a review for {buddy.name}!</p>
                    </div>
                  )}

                  {selectedTab === 'gallery' && (
                    <div className="text-center py-12">
                      <Camera className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No Photos Yet</h3>
                      <p className="text-gray-500">Photos will appear here once {buddy.name} adds them.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <Zap className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">Response Rate</span>
                    </div>
                    <span className="font-semibold text-gray-900">{buddy.responseRate}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Experience</span>
                    </div>
                    <span className="font-semibold text-gray-900">{buddy.experience}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">Completed Tours</span>
                    </div>
                    <span className="font-semibold text-gray-900">{buddy.completedTours || "50+"}</span>
                  </div>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <button
                    className="w-full inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                    onClick={() => navigate(`/booking/${buddy.id}`)}
                  >
                    <CalendarCheck className="w-5 h-5" />
                    Book Experience
                  </button>
                  
                  <button
                    className="w-full inline-flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-200"
                    onClick={() => navigate(`/client-dashboard/messages?to=${buddy.id}`)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send Message
                  </button>

                </div>
              </div>

              {/* Safety Badge */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-blue-900">Safety Verified</h3>
                </div>
                <p className="text-blue-700 text-sm leading-relaxed">
                  This buddy has completed background verification and safety training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuddyDetail;