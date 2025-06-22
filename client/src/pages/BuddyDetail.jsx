import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Globe,
  Star,
  Clock,
  Zap,
  CheckCircle2,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import buddies from "../data/buddies";

function BuddyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const buddy = buddies.find((b) => b.id.toString() === id);

  if (!buddy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Star className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Buddy not found</h2>
          <p className="text-gray-600 mb-6">The buddy you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/buddies')}
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Buddies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button 
            onClick={() => navigate('/buddies')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Buddies</span>
          </button>
        </div>
      </div>

      <div className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Profile Header */}
            <div className="relative">
              <div className="h-32 bg-gradient-to-r from-orange-500 to-amber-500"></div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <img
                    src={buddy.avatar}
                    alt={buddy.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                  />
                  {buddy.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="pt-16 pb-8 px-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{buddy.name}</h1>
              <p className="text-gray-600 mb-4">{buddy.title}</p>
              
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                buddy.isOnline 
                  ? "bg-green-50 text-green-700 border border-green-200" 
                  : "bg-gray-50 text-gray-600 border border-gray-200"
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  buddy.isOnline ? "bg-green-500" : "bg-gray-400"
                }`} />
                {buddy.isOnline ? "Online" : "Offline"}
              </div>

              {/* Bio */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  {buddy.bio || "This buddy is available to guide, assist, and help you enjoy your journey in a new place."}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 text-sm">
                <div className="p-4 bg-gray-50 rounded-xl text-left">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600">{buddy.location}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl text-left">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">Languages</div>
                      <div className="text-gray-600">{buddy.languages.join(", ")}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl text-left">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <div>
                      <div className="font-medium text-gray-900">Rating</div>
                      <div className="text-gray-600">{buddy.rating || "Not rated yet"}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl text-left">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">Experience</div>
                      <div className="text-gray-600">{buddy.experience}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl text-left">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">Response Rate</div>
                      <div className="text-gray-600">{buddy.responseRate}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gray-500" />
                    <div>
                      <div className="font-medium text-gray-900">Verified</div>
                      <div className="text-gray-600">{buddy.verified ? "Yes ✅" : "No ❌"}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Button */}
              <div className="mt-8">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Message Buddy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuddyDetail;