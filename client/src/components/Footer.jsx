import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import favicon from '/public/favicon_prev_ui.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Find a Buddy', href: '#find-buddy' },
    { name: 'Become a Buddy', href: '#become-buddy' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Safety', href: '#safety' },
    { name: 'Support', href: '#support' },
    { name: 'FAQ', href: '#faq' }
  ];

  const services = [
    { name: 'Grocery Shopping', href: '#grocery' },
    { name: 'Pet Care', href: '#pet-care' },
    { name: 'Elderly Companion', href: '#elderly' },
    { name: 'Moving Help', href: '#moving' },
    { name: 'Event Support', href: '#events' },
    { name: 'Transportation', href: '#transport' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Refund Policy', href: '#refunds' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' }
  ];

  return (
    <footer className="pr-10 pl-5 border-t-4 mt-12 font-poppins" style={{backgroundColor: '#0a3d62', borderTopColor: '#ff7043'}}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" >
                <img src={favicon} alt='' className="w-20 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">MyGoBuddy</h3>
            </div>
            <p className="text-sm mb-6 leading-relaxed" style={{color: '#e8f4f8'}}>
              Connecting communities through trusted companionship and reliable assistance. 
              Your local buddy for all of life's tasks and adventures.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-sm" style={{color: '#e8f4f8'}}>
                <Phone className="w-4 h-4 mr-2" style={{color: '#ff7043'}} />
                <span>+1 (555) 123-BUDDY</span>
              </div>
              <div className="flex items-center text-sm" style={{color: '#e8f4f8'}}>
                <Mail className="w-4 h-4 mr-2" style={{color: '#ff7043'}} />
                <span>hello@mygobuddy.com</span>
              </div>
              <div className="flex items-center text-sm" style={{color: '#e8f4f8'}}>
                <MapPin className="w-4 h-4 mr-2" style={{color: '#ff7043'}} />
                <span>Available nationwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{color: '#e8f4f8'}}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{color: '#e8f4f8'}}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-sm mb-3" style={{color: '#e8f4f8'}}>
                Get updates on new features and special offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm rounded-l-lg border-0 focus:outline-none focus:ring-2"
                  style={{backgroundColor: '#fff5ec', color: '#0a3d62', focusRingColor: '#ff7043'}}
                />
                <button 
                  className="px-4 py-2 text-sm font-medium text-white rounded-r-lg transition-colors duration-200 hover:opacity-90"
                  style={{backgroundColor: '#ff7043'}}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-2">Legal</h5>
              <ul className="space-y-1">
                {legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-xs transition-colors duration-200 hover:text-white"
                      style={{color: '#e8f4f8'}}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{borderTopColor: '#1a4971'}}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            
            {/* Copyright */}
            <div className="flex items-center mb-4 sm:mb-0">
              <p className="text-sm select-none" style={{color: '#e8f4f8'}}>
                &copy; {currentYear} MyGoBuddy. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm" style={{color: '#e8f4f8'}}>Follow us:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                    style={{backgroundColor: '#1a4971', color: '#e8f4f8'}}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 pt-4 border-t text-center" style={{borderTopColor: '#1a4971'}}>
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs" style={{color: '#e8f4f8'}}>
              <span className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#4ade80'}}></div>
                Background Verified Buddies
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#4ade80'}}></div>
                24/7 Customer Support
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#4ade80'}}></div>
                Secure Payments
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#4ade80'}}></div>
                Satisfaction Guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;