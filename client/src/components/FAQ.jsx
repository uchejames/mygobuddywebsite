import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

const FAQComponent = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      id: 1,
      question: "What is MyGoBuddy?",
      answer: "MyGoBuddy is a trusted companion service that connects you with verified local buddies who can assist with various tasks, errands, and activities..."
    },
    {
      id: 2,
      question: "How do I book a Buddy?",
      answer: "Booking a Buddy is simple! Just browse available buddies in your area..."
    },
    // ... Add the rest of your questions here
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    newOpenItems.has(id) ? newOpenItems.delete(id) : newOpenItems.add(id);
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-neutral min-h-screen" style={{ backgroundColor: '#f8f8f8' }}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#0a3d62' }}>
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-2 font-poppins" style={{ color: '#0a3d62' }}>Frequently Asked Questions</h1>
        <p className="text-lg font-poppins" style={{ color: '#2b2d42' }}>
          Find answers to common questions about MyGoBuddy
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search frequently asked questions..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-sm font-poppins"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary font-poppins"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold pr-4 font-poppins" style={{ color: '#0a3d62' }}>
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(item.id) ? (
                    <ChevronUp className="h-5 w-5 transition-transform duration-200" style={{ color: '#ff7043' }} />
                  ) : (
                    <ChevronDown className="h-5 w-5 transition-transform duration-200" style={{ color: '#ff7043' }} />
                  )}
                </div>
              </div>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-4">
                <div className="h-px mb-4" style={{ background: 'linear-gradient(to right, #ff7043, transparent)' }}></div>
                <p className="leading-relaxed font-poppins" style={{ color: '#2b2d42' }}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f8f8f8' }}>
            <Search className="w-8 h-8" style={{ color: '#2b2d42' }} />
          </div>
          <h3 className="text-lg font-semibold mb-2 font-poppins" style={{ color: '#0a3d62' }}>No results found</h3>
          <p className="font-poppins" style={{ color: '#2b2d42' }}>
            Try adjusting your search terms or browse all questions above.
          </p>
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-xl font-semibold mb-2 font-poppins" style={{ color: '#0a3d62' }}>
          Still have questions?
        </h3>
        <p className="mb-4 font-poppins" style={{ color: '#2b2d42' }}>
          Can't find what you're looking for? Our support team is here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium font-poppins hover:opacity-90"
            style={{ backgroundColor: '#ff7043' }}
          >
            Contact Support
          </button>
          <button
            className="px-6 py-2 rounded-lg transition-colors duration-200 font-medium font-poppins hover:opacity-90"
            style={{ backgroundColor: '#fff5ec', color: '#0a3d62' }}
          >
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
