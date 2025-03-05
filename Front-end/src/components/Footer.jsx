import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-12 py-6 bg-white">
      <div className="flex justify-between items-center">
        {/* Left Side: Logo and Social Media Icons */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <p className="text-gray-600 dark:text-gray-300 font-bold text-lg">
            SOVARA
          </p>

          {/* Vertical Separator Line */}
          <div className="h-8 w-px bg-gray-300 dark:bg-gray-600"></div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
            <a
              href="mailto:support@sovara.com"
              className="text-black hover:text-blue-500"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/*support and legal links */}
        <div className="mt-2 space-x-4">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Support
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Track your order
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Help & FAQs
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            Contact us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
