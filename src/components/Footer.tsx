import React from "react";
import { FiFacebook, FiTwitter, FiPrinter, FiInstagram } from 'react-icons/fi';
import { MdMailOutline, MdSmartphone } from 'react-icons/md';
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="h-20 bg-[#F7F7F7] flex items-center justify-center">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-4">
              <span className="text-base font-medium text-gray-900 hover:text-[#008001] cursor-pointer">
                Terms
              </span>
              <span className="text-base font-medium text-gray-900 hover:text-[#008001] cursor-pointer">
                Privacy
              </span>
              <span className="text-base font-medium text-gray-900 hover:text-[#008001] cursor-pointer">
                Cookies
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                aria-label="Facebook"
                className="p-2 rounded-full hover:bg-[#008001] hover:text-white transition-colors duration-300"
              >
                <FiFacebook className="w-6 h-6" />
              </button>
              <button
                aria-label="Twitter"
                className="p-2 rounded-full hover:bg-[#008001] hover:text-white transition-colors duration-300"
              >
                <FiTwitter className="w-6 h-6" />
              </button>
              <button
                aria-label="Printer"
                className="p-2 rounded-full hover:bg-[#008001] hover:text-white transition-colors duration-300"
              >
                <FiPrinter className="w-6 h-6" />
              </button>
              <button
                aria-label="Instagram"
                className="p-2 rounded-full hover:bg-[#008001] hover:text-white transition-colors duration-300"
              >
                <FiInstagram className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <footer
        className="bg-gray-800 text-white py-12"
        style={{
          backgroundImage: `url('/footer-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
          <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 px-4">
            {/* Contact Info */}
            <div className="flex flex-col space-y-4 lg:max-w-[300px]">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-10 w-10"
              />
              <p className="text-base font-medium">
                Address: No.2A, Down Town Road No 7, Phum Kork Chambak, Phnom Penh
              </p>
              <div className="flex items-center gap-2">
                <MdSmartphone className="w-6 h-6" />
                <p>Office: (+855) 088 5654 093</p>
              </div>
              <div className="flex items-center gap-2">
                <MdMailOutline className="w-6 h-6" />
                <p>Support: info@medi.com</p>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 flex-1">
              <div>
                <h4 className="font-semibold text-lg mb-4">My Account</h4>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    My Account
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Order History
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Shopping Cart
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Wishlist
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Helps</h4>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Faqs
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Terms & Condition
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Proxy</h4>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    About
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Shop
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Product
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Track Order
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Categories</h4>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Fruit & Vegetables
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Meat & Fish
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Bread & Bakery
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Beauty & Health
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center border-t border-gray-700 pt-6 mt-8">
            <p className="text-gray-500 text-sm">
              Developed by Digital Solution
            </p>
          </div>
      </footer>
    </div>
  );
};

export default Footer;