import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        
        {/* Logo / About */}
        <div>
          <h3 className="text-2xl font-bold mb-4">MediCare</h3>
          <p className="text-sm text-gray-300">
            Leading healthcare providers with top-notch medical services and patient care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Doctors</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>Email: support@medicare.com</li>
            <li>Phone: +1 800 123 456</li>
            <li>123 Health Blvd, Medical City</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-gray-300 text-xl">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MediCare Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
