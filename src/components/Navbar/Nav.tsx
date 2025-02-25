import React from "react";
import { Typography } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-black text-white h-14 border-b border-gray-300 flex justify-between items-center ">
       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 py-3 max-w-auto">
      {/* Left side menu items */}
      <div className="flex items-center gap-3 md:gap-5 flex-wrap ">
        <Link href="/" className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded">
          Home
        </Link>

        {/* Shop Dropdown */}
        <div className="relative group">
          <button className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded">
            Shop
          </button>
          <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 rounded shadow-md w-32">
            <Link href="/shop" className="block px-3 py-2 hover:bg-green-500 hover:text-white">Shop 1</Link>
            <Link href="/shop2" className="block px-3 py-2 hover:bg-green-500 hover:text-white">Shop 2</Link>
          </div>
        </div>

        {/* Blog Dropdown */}
        <div className="relative group">
          <button className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded">
            Blog
          </button>
          <div className="absolute left-0 hidden group-hover:block bg-white text-black mt-1 rounded shadow-md w-32">
            <Link href="/blog1" className="block px-3 py-2 hover:bg-green-500 hover:text-white">Blog 1</Link>
            <Link href="/blog2" className="block px-3 py-2 hover:bg-green-500 hover:text-white">Blog 2</Link>
          </div>
        </div>

        <Link href="/about" className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded">
          About Us
        </Link>
        <Link href="/contact" className="text-sm hover:bg-green-500 hover:text-white px-2 py-1 rounded">
          Contact Us
        </Link>
      </div>

      {/* Right side phone number */}
      <div className="hidden md:flex items-center">
        <FaPhoneAlt />
        <Typography className="text-sm">(+855) 088 5654 093</Typography>
      </div>
      </div>
    </div>
  );
};

export { Nav };
