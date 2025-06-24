import React, { useState } from 'react';
import { User, Upload, ChevronDown, Check, AlertCircle, Camera, FileText, Star, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

const CompleteBuddyProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    bio: "",
    skills: [''],
    location: '',
    flatRate: '',
    experienceLevel: '',
    languages: ['']
  });

  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [profileProgress, setProfileProgress] = useState(65);
  const [uploadedFiles, setUploadedFiles] = useState({
    profilePicture: null,
    verification: null
  });
  const [selectedFiles, setSelectedFiles] = useState({
    profilePicture: null,
    verification: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    updateProgress();
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
    updateProgress();
  };

  const handleLanguageToggle = (language) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  const handleFileUpload = (type, event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setSelectedFiles(prev => ({ ...prev, [type]: file }));
      setUploadedFiles(prev => ({ ...prev, [type]: file.name }));
      updateProgress();
    }
  };

  const createFileInput = (type) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = type === 'profilePicture' ? 'image/*' : '.pdf,.jpg,.jpeg,.png';
    input.onchange = (e) => handleFileUpload(type, e);
    input.click();
  };

  const uploadFileToStorage = async (file, bucket, path) => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(path, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;
      return data.path;
    } catch (error) {
      console.error(`Error uploading file to ${bucket}:`, error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Generate unique ID for file paths
      const userId = Date.now().toString();
      let profilePictureUrl = null;
      let verificationDocUrl = null;

      // Upload profile picture if selected
      if (selectedFiles.profilePicture) {
        const fileName = `${userId}_profile.${selectedFiles.profilePicture.name.split('.').pop()}`;
        profilePictureUrl = await uploadFileToStorage(
          selectedFiles.profilePicture, 
          'profile-pictures', 
          fileName
        );
      }

      // Upload verification document if selected
      if (selectedFiles.verification) {
        const fileName = `${userId}_verification.${selectedFiles.verification.name.split('.').pop()}`;
        verificationDocUrl = await uploadFileToStorage(
          selectedFiles.verification, 
          'verification-docs', 
          fileName
        );
      }

      // Insert buddy data into database
      const { data, error } = await supabase
        .from('buddies')
        .insert([
          {
            id: userId,
            bio: formData.bio,
            skills: formData.skills,
            rate: parseFloat(formData.flatRate),
            languages: formData.languages,
            experience_level: formData.experienceLevel,
            location: formData.location,
            profile_picture: profilePictureUrl,
            verification_doc: verificationDocUrl,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;

      // Show success message
      setShowSuccess(true);
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        window.location.href = '/buddy-dashboard';
      }, 2000);

    } catch (error) {
      console.error('Error creating buddy profile:', error);
      alert('Failed to create profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateProgress = () => {
    setTimeout(() => {
      const progress = Math.min(100, profileProgress + Math.random() * 10);
      setProfileProgress(progress);
    }, 300);
  };

  const availableSkills = [
    "House Cleaning", "Errand Running", "Pet Sitting", "Home Repair",
    "Personal Tutoring", "Grocery Delivery", "Tech Setup Help", "Laundry Assistance",
    "Moving Help", "Babysitting", "Cooking", "Shopping Assistant"
  ];

  const availableLanguages = ['English', 'Yoruba', 'Igbo', 'Hausa', 'French', 'Pidgin'];
  const experienceLevels = [
    { level: "Beginner", description: "New to providing services" },
    { level: "Skilled", description: "Some experience with good feedback" },
    { level: "Experienced", description: "Proven track record" },
    { level: "Top Rated", description: "Exceptional service and reviews" }
  ];

  const getCompletionItems = () => [
    { name: 'Full Name', completed: formData.fullName.length > 0 },
    { name: 'Description', completed: formData.bio.length > 20 },
    { name: 'Services', completed: formData.skills.length >= 3 },
    { name: 'Location', completed: formData.location.length > 0 },
    { name: 'Rate', completed: formData.flatRate.length > 0 },
    { name: 'Profile Picture', completed: uploadedFiles.profilePicture },
    { name: 'Verification', completed: uploadedFiles.verification }
  ];

  const completedItems = getCompletionItems().filter(item => item.completed).length;
  const totalItems = getCompletionItems().length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-neutral to-light font-poppins">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Progress Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-textPrimary">Profile Completion</h2>
              <p className="text-dark/60 text-sm">Complete all sections to maximize your bookings</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{completedItems}/{totalItems}</div>
              <div className="text-sm text-dark/60">sections done</div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(completedItems / totalItems) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {getCompletionItems().map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                {item.completed ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                )}
                <span className={`text-xs ${item.completed ? 'text-green-600' : 'text-gray-500'}`}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              {/* Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-textPrimary">Complete Your Profile</h1>
                    <p className="text-dark/70">Stand out and get more bookings</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-textPrimary flex items-center">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    Personal Information
                  </h3>

                  <div>
                    <label className="block text-dark font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-textPrimary"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">Professional Description *</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-textPrimary resize-none"
                      placeholder="Describe your experience and what makes you special. This helps clients trust you!"
                    />
                    <p className="text-xs text-dark/50 mt-1">{formData.bio.length}/200 characters</p>
                  </div>

                  <div>
                    <label className="block text-dark font-medium mb-2">Location *</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-textPrimary"
                      placeholder="e.g. Lagos, Nigeria"
                    />
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-textPrimary flex items-center">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                      <Star className="w-4 h-4 text-secondary" />
                    </div>
                    Services You Offer *
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {availableSkills.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          formData.skills.includes(skill)
                            ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-md scale-105'
                            : 'bg-white border-2 border-gray-200 text-textPrimary hover:border-primary hover:shadow-sm'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-dark/60">Select at least 3 services to get started</p>
                </div>

                {/* Pricing & Experience */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-textPrimary flex items-center">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-accent font-bold text-sm">₦</span>
                    </div>
                    Pricing & Experience
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-dark font-medium mb-2">Flat Rate per Service *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-textPrimary font-bold text-lg">₦</span>
                        <input
                          type="number"
                          value={formData.flatRate}
                          onChange={(e) => handleInputChange('flatRate', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-textPrimary text-lg font-semibold"
                          placeholder="2500"
                        />
                      </div>
                      <p className="text-xs text-dark/50 mt-1">Competitive rates get more bookings</p>
                    </div>

                    <div>
                      <label className="block text-dark font-medium mb-2">Experience Level *</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-left text-textPrimary flex items-center justify-between"
                        >
                          <span className="font-medium">{formData.experienceLevel}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExperienceOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isExperienceOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden">
                            {experienceLevels.map((item) => (
                              <button
                                key={item.level}
                                type="button"
                                onClick={() => {
                                  handleInputChange('experienceLevel', item.level);
                                  setIsExperienceOpen(false);
                                }}
                                className="w-full px-4 py-4 text-left hover:bg-neutral transition-colors border-b border-gray-100 last:border-b-0"
                              >
                                <div className="font-medium text-textPrimary">{item.level}</div>
                                <div className="text-sm text-dark/60">{item.description}</div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-textPrimary">Languages Spoken</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {availableLanguages.map((language) => (
                      <button
                        key={language}
                        type="button"
                        onClick={() => handleLanguageToggle(language)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          formData.languages.includes(language)
                            ? 'bg-gradient-to-r from-secondary to-secondary/80 text-white'
                            : 'bg-white border border-gray-200 text-textPrimary hover:border-secondary'
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* File Uploads */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-textPrimary mb-4">Upload Documents</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-dark font-medium mb-2">Profile Picture</label>
                  <div 
                    onClick={() => createFileInput('profilePicture')}
                    className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                      uploadedFiles.profilePicture 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-300 hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    {uploadedFiles.profilePicture ? (
                      <div className="text-green-600">
                        <Check className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">Photo uploaded!</p>
                        <p className="text-xs text-green-500">{uploadedFiles.profilePicture}</p>
                      </div>
                    ) : (
                      <div className="text-gray-500">
                        <Camera className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">Upload photo</p>
                        <p className="text-xs mt-1">Profiles with photos get 5x more views</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">Verification Document</label>
                  <div 
                    onClick={() => createFileInput('verification')}
                    className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                      uploadedFiles.verification 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-300 hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    {uploadedFiles.verification ? (
                      <div className="text-green-600">
                        <Check className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">Document uploaded!</p>
                        <p className="text-xs text-green-500">{uploadedFiles.verification}</p>
                      </div>
                    ) : (
                      <div className="text-gray-500">
                        <FileText className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">Upload ID/Certificate</p>
                        <p className="text-xs mt-1">Builds trust with clients</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <h4 className="font-semibold text-textPrimary mb-2">Pro Tips</h4>
                  <ul className="text-sm text-dark/70 space-y-1">
                    <li>• Complete profiles get 3x more bookings</li>
                    <li>• Add a professional photo</li>
                    <li>• Be specific in your description</li>
                    <li>• Competitive pricing helps</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting || completedItems < totalItems}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                isSubmitting || completedItems < totalItems
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-lg transform hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Creating Profile...</span>
                </>
              ) : (
                <span>Complete Profile & Go Live</span>
              )}
            </button>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">Profile Created Successfully!</h3>
              <p className="text-dark/70 mb-4">
                Welcome to the Buddy community! You'll be redirected to your dashboard shortly.
              </p>
              <div className="flex items-center justify-center space-x-2 text-primary">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">Redirecting...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompleteBuddyProfile;