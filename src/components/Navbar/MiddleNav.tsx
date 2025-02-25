import React from 'react';
import Image from 'next/legacy/image';
import { Typography } from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';

const MiddleNav = () => {
  return (
    <div className="bg-white py-2 w-full border-b border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 gap-4 md:gap-10 max-w-auto">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
        </div>

        {/* Search box */}
        <div className="relative flex items-center w-full max-w-md">
  <input
    type="text"
    placeholder="Search for products..."
    className="w-full pl-10 pr-4 py-2 text-gray-700 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
  />
  <HiOutlineSearch className="absolute left-3 text-gray-400 text-lg" />
  <button className="absolute right-0 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
    Search
  </button>
</div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <Image src="/heart.svg" alt="heart" width={32} height={32} />
          <div className="hidden md:block h-6 border-r border-gray-300"></div>
          <div className="flex items-center space-x-2">
            <Image src="/shopping.svg" alt="shopping" width={34} height={34} />
            <Typography fontSize={12} fontWeight={400} className="text-gray-400">
              Shopping cart: <span className="text-gray-700 text-sm font-bold">$0</span>
            </Typography>  
          </div>
        </div>

      </div>
    </div>
  );
};

export { MiddleNav };
