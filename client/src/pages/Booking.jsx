import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Calendar, Clock, User, MessageSquare, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";

function Booking() {
  const { buddyId } = useParams();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [buddyInfo, setBuddyInfo] = useState(null);
  
  const [form, setForm] = useState({
    buddyId: buddyId || "",
    date: "",
    time: "",
    notes: "",
    duration: "60", // default 60 minutes
  });

  // Mock buddy data - replace with actual API call
  useEffect(() => {
    if (buddyId) {
      // Simulate API call
      setBuddyInfo({
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        expertise: "Web Development",
        rating: 4.8,
        sessionsCompleted: 127
      });
    }
  }, [buddyId]);

  // Available time slots
  const timeSlots = [
    { time: "09:00", label: "9:00 AM" },
    { time: "09:30", label: "9:30 AM" },
    { time: "10:00", label: "10:00 AM" },
    { time: "10:30", label: "10:30 AM" },
    { time: "11:00", label: "11:00 AM" },
    { time: "11:30", label: "11:30 AM" },
    { time: "12:00", label: "12:00 PM" },
    { time: "12:30", label: "12:30 PM" },
    { time: "13:00", label: "1:00 PM" },
    { time: "13:30", label: "1:30 PM" },
    { time: "14:00", label: "2:00 PM" },
    { time: "14:30", label: "2:30 PM" },
    { time: "15:00", label: "3:00 PM" },
    { time: "15:30", label: "3:30 PM" },
    { time: "16:00", label: "4:00 PM" },
    { time: "16:30", label: "4:30 PM" },
    { time: "17:00", label: "5:00 PM" },
    { time: "17:30", label: "5:30 PM" }
  ];

  // Mock booked slots - replace with actual API call
  const bookedSlots = ["10:00", "14:30", "16:00"];

  // Duration options
  const durationOptions = [
    { value: "30", label: "30 minutes" },
    { value: "60", label: "1 hour" },
    { value: "90", label: "1.5 hours" },
    { value: "120", label: "2 hours" }
  ];

  // Generate calendar days
  const generateCalendarDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 42; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = currentDate.getMonth() === month;
      const isPast = currentDate < today;
      const isToday = currentDate.getTime() === today.getTime();
      const isSelected = selectedDate && currentDate.getTime() === selectedDate.getTime();
      
      days.push({
        date: currentDate,
        day: currentDate.getDate(),
        isCurrentMonth,
        isPast,
        isToday,
        isSelected
      });
    }
    
    return days;
  };

  const handleDateSelect = (day) => {
    if (day.isPast || !day.isCurrentMonth) return;
    setSelectedDate(day.date);
    setSelectedTimeSlot(null);
    setForm(prev => ({ 
      ...prev, 
      date: day.date.toISOString().split('T')[0] 
    }));
    setErrors(prev => ({ ...prev, date: "" }));
  };

  const handleTimeSelect = (timeSlot) => {
    if (bookedSlots.includes(timeSlot.time)) return;
    setSelectedTimeSlot(timeSlot);
    setForm(prev => ({ ...prev, time: timeSlot.time }));
    setErrors(prev => ({ ...prev, time: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step >= 1 && !selectedDate) {
      newErrors.date = "Please select a date";
    }
    
    if (step >= 2 && !selectedTimeSlot) {
      newErrors.time = "Please select a time slot";
    }
    
    if (step >= 3 && !form.duration) {
      newErrors.duration = "Please select session duration";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Booking submitted:", {
        ...form,
        selectedDate: selectedDate?.toISOString(),
        selectedTimeSlot: selectedTimeSlot?.time
      });
      
      setCurrentStep(4); // Success step
    } catch (error) {
      setErrors({ submit: "Failed to book session. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    const today = new Date();
    const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1);
    if (prevMonthDate >= new Date(today.getFullYear(), today.getMonth())) {
      setCurrentMonth(prevMonthDate);
    }
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const calendarDays = generateCalendarDays(currentMonth);
  const monthYear = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Step 4 - Success
  if (currentStep === 4) {
    return (
      <div className="max-w-2xl mx-auto p-6 mt-12">
        <div className="bg-white shadow-2xl rounded-2xl p-8 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Session Booked Successfully!</h2>
          <p className="text-gray-600 mb-8">Your session has been confirmed. You'll receive a confirmation email shortly.</p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">Booking Summary</h3>
            
            {buddyInfo && (
              <div className="flex items-center mb-4 pb-4 border-b">
                <img 
                  src={buddyInfo.avatar} 
                  alt={buddyInfo.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">{buddyInfo.name}</p>
                  <p className="text-sm text-gray-600">{buddyInfo.expertise}</p>
                </div>
              </div>
            )}
            
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date:
                </span>
                <span className="font-medium">{formatDate(selectedDate)}</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Time:
                </span>
                <span className="font-medium">{selectedTimeSlot?.label}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span className="font-medium">{form.duration} minutes</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => navigate("/dashboard/bookings")}
              className="flex-1 bg-[#ff7043] hover:bg-orange-600 text-white py-3 rounded-lg transition-colors font-medium"
            >
              View My Bookings
            </button>
            <button 
              onClick={() => {
                setCurrentStep(1);
                setSelectedDate(null);
                setSelectedTimeSlot(null);
                setForm({
                  buddyId: buddyId || "",
                  date: "",
                  time: "",
                  notes: "",
                  duration: "60"
                });
              }}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Book Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-12">
      {/* Header */}
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Session</h1>
          {buddyInfo && (
            <div className="flex items-center justify-center mb-6">
              <img 
                src={buddyInfo.avatar} 
                alt={buddyInfo.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900">{buddyInfo.name}</h3>
                <p className="text-gray-600">{buddyInfo.expertise}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="text-yellow-500 mr-1">★</span>
                  {buddyInfo.rating} • {buddyInfo.sessionsCompleted} sessions
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${currentStep >= step 
                    ? 'bg-[#ff7043] text-white' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`
                    w-16 h-0.5 mx-2
                    ${currentStep > step ? 'bg-[#ff7043]' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Step 1: Select Date */}
        {currentStep === 1 && (
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-[#ff7043]" />
              Select Date
            </h2>

            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ←
                </button>
                <span className="font-medium text-gray-900 text-lg">
                  {monthYear}
                </span>
                <button 
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  →
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 mb-6">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    disabled={day.isPast || !day.isCurrentMonth}
                    className={`
                      aspect-square flex items-center justify-center text-sm font-medium transition-all rounded-lg
                      ${day.isCurrentMonth ? 'text-gray-900' : 'text-gray-300'}
                      ${day.isPast ? 'cursor-not-allowed opacity-40' : 'hover:bg-orange-50'}
                      ${day.isToday ? 'bg-blue-100 text-blue-600' : ''}
                      ${day.isSelected ? 'bg-[#ff7043] text-white' : ''}
                      ${!day.isPast && day.isCurrentMonth ? 'cursor-pointer' : ''}
                    `}
                  >
                    {day.day}
                  </button>
                ))}
              </div>

              {selectedDate && (
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-orange-700">
                    Selected: <span className="font-medium">{formatDate(selectedDate)}</span>
                  </p>
                </div>
              )}

              {errors.date && (
                <div className="flex items-center text-red-600 text-sm mb-4">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {errors.date}
                </div>
              )}

              <button
                onClick={nextStep}
                disabled={!selectedDate}
                className="w-full bg-[#ff7043] hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-colors font-medium"
              >
                Continue to Time Selection
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Time */}
        {currentStep === 2 && (
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-3 text-[#ff7043]" />
              Select Time
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600">
                  Selected Date: <span className="font-medium text-gray-900">{formatDate(selectedDate)}</span>
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-6">
                {timeSlots.map(slot => (
                  <button
                    key={slot.time}
                    onClick={() => handleTimeSelect(slot)}
                    disabled={bookedSlots.includes(slot.time)}
                    className={`
                      py-3 px-4 text-sm font-medium rounded-lg transition-all
                      ${bookedSlots.includes(slot.time) 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : selectedTimeSlot?.time === slot.time
                          ? 'bg-[#ff7043] text-white'
                          : 'bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                      }
                    `}
                  >
                    {slot.label}
                    {bookedSlots.includes(slot.time) && (
                      <div className="text-xs text-gray-400 mt-1">Booked</div>
                    )}
                  </button>
                ))}
              </div>

              {errors.time && (
                <div className="flex items-center text-red-600 text-sm mb-4">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {errors.time}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!selectedTimeSlot}
                  className="flex-1 bg-[#ff7043] hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-colors font-medium"
                >
                  Continue to Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Session Details */}
        {currentStep === 3 && (
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="h-6 w-6 mr-3 text-[#ff7043]" />
              Session Details
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Date:</span>
                    <div className="font-medium text-gray-900">{formatDate(selectedDate)}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Time:</span>
                    <div className="font-medium text-gray-900">{selectedTimeSlot?.label}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Session Duration *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {durationOptions.map(option => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleChange({ target: { name: 'duration', value: option.value } })}
                        className={`
                          py-3 px-4 text-sm font-medium rounded-lg transition-all border
                          ${form.duration === option.value
                            ? 'bg-[#ff7043] text-white border-[#ff7043]'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                          }
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  {errors.duration && (
                    <p className="text-red-600 text-sm mt-2 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.duration}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share what you'd like to work on, specific topics you want to cover, or any questions you have..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff7043] focus:border-[#ff7043] transition-colors resize-none"
                  />
                </div>
              </div>

              {errors.submit && (
                <div className="flex items-center text-red-600 text-sm mt-4 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {errors.submit}
                </div>
              )}

              <div className="flex gap-4 mt-8">
                <button
                  onClick={prevStep}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 bg-[#ff7043] hover:bg-orange-600 disabled:bg-orange-400 text-white py-3 rounded-lg transition-colors font-medium flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Booking...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;