import React from 'react';
import Image from "next/legacy/image";
import { Typography } from '@mui/material';
import { HiOutlineSearch} from 'react-icons/hi';
import { Inter } from 'next/font/google';

const MiddleNav = () => {
  return (
    <div className="bg-white py-2 flex items-center justify-between w-full h-20 px-[140px] gap-10 opacity-100">
      <div className="flex items-center">
      <Image src="/logo.svg" alt="logo" width={40} height={40} />
      </div>

      {/* Search box */}
      <div className="flex items-center flex-grow max-w-sm">
        <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">
          <div className="flex-shrink-0 px-3 py-2 text-gray-400">
            <HiOutlineSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-4 py-2 focus:outline-none"
          />
        </div>
        <button className="px-4 py-2 bg-green-500 text-white rounded-r-md">
  Search
</button>
      </div>
      {/* icon */}
      <div className="flex items-center space-x-4">
        <Image src="/heart.svg" alt="heart" width={32} height={32} />
        <div className="h-6 border-r border-gray-300"></div>
        <div className="flex items-center space-x-2">
          <Image src="/shopping.svg" alt="shopping" width={34} height={34} />
          <Typography fontSize={12} fontWeight={400} className='text-gray-400'>Shopping cart: <span className="text-gray-700 text-sm font-bold " >$0</span></Typography>  
        </div>
      </div>
    </div>
  );
};

export {MiddleNav};
