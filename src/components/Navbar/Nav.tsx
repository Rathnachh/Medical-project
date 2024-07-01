import React from "react";
import { Typography } from "@mui/material";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-black text-white h-14 border-b border-gray-300 flex justify-between items-center px-[140px]">
      {/* Left side menu items */}
      <div className="flex items-center space-x-2">
        <Link href="/" passHref>
          <div className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded cursor-pointer">
            Home
          </div>
        </Link>
        <div className="relative">
          <select
            className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded cursor-pointer bg-transparent border-none outline-none"
          >
            <option value="" className="text-black hover:bg-green-500 px-2 py-1 rounded cursor-pointer border-none outline-none">Shop</option>
            <option value="/shop" className="text-black hover:bg-green-500 px-2 py-1 rounded cursor-pointer border-none outline-none">Shop 1</option>
            <option value="/shop2" className="text-black hover:bg-green-500 px-2 py-1 rounded cursor-pointer border-none outline-none">Shop 2</option>
          </select>
        </div>
        <div className="relative">
          <select
            className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded cursor-pointer bg-transparent border-none outline-none"
          >
            <option value="/blog" className="text-black">Blog</option>
            <option value="/blog" className="text-black">Blog 1</option>
            <option value="/blog" className="text-black">Blog 2</option>
          </select>
        </div>
        <Link href="/about" passHref>
          <div className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded cursor-pointer">
            About Us
          </div>
        </Link>
        <Link href="/contact" passHref>
          <div className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded cursor-pointer">
            Contact Us
          </div>
        </Link>
      </div>

      {/* Right side phone number */}
      <div className="flex items-center space-x-2">
        <FaPhoneAlt />
        <Typography className="text-sm">(+855) 088 5654 093</Typography>
      </div>
    </div>
  );
};

export { Nav };
