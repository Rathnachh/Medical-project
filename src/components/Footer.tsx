import React from "react";
import { FiFacebook, FiTwitter, FiPrinter, FiInstagram } from 'react-icons/fi';
import { MdMailOutline, MdSmartphone } from 'react-icons/md';
// import { IoPinterest } from 'react-icons/io';
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="h-[88px] bg-[#F7F7F7] w-full flex items-center justify-center">
        <Container>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              <span className="text-[16px] font-medium text-gray-900">
                Terms
              </span>
              <span className="text-[16px] font-medium text-gray-900">
                Privacy
              </span>
              <span className="text-[16px] font-medium text-gray-900">
                Cookies
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <FiFacebook className="w-6 h-6" />
              </button>
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <FiTwitter className="w-6 h-6" />
              </button>
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <FiPrinter className="w-6 h-6" />
              </button>
              <button className="hover:text-white hover:bg-[#008001] p-2 rounded-full">
                <FiInstagram className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </div>
      <footer
        className="bg-gray-800 text-white py-20"
        style={{
          backgroundImage: `url('/footer-bg.png')`,
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div className="flex items-center">
            <div className="flex flex-col items-start space-y-4 mr-20 w-[336px]">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-10 w-10 mb-4"
              />
              <p className="text-[16px] font-medium">
                Address: No.2A, Down Town Road No 7, Phum Kork Chambak, Phnom
                Penh
              </p>
              <div className="flex items-center">
                <MdSmartphone className="w-6 h-6 mr-2" />
                <p>Office: (+855) 088 5654 093</p>
              </div>
              <div className="flex items-center">
                <MdMailOutline className="w-6 h-6 mr-2" />
                <p>Support: info@medi.com</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-[16px] text-white mb-4">
                  My Account
                </h4>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    My Account
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Order History
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Shopping Cart
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Wishlist
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[16px] text-white mb-4">
                  Helps
                </h4>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Contact
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Faqs
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Terms & Condition
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Privacy Policy
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[16px] text-white mb-4">
                  Proxy
                </h4>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    About
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Shop
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Product
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Track Order
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[16px] text-white mb-4">
                  Categories
                </h4>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Fruit & Vegetables
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Meat & Fish
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Bread & Bakery
                  </p>
                  <p className="text-[#999999] text-[14px] font-normal hover:text-white cursor-pointer">
                    Beauty & Health
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center border-t border-gray-700 pt-4 mt-8">
            <p className="text-[#808080]">Developed by Digital Solution</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
