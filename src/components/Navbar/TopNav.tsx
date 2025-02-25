import React from 'react';
import { Typography } from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const TopNav: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16 py-3 max-w-auto">
        <Typography className="flex items-center text-gray-500 text-sm text-center md:text-left mb-2 md:mb-0">
          <FaMapMarkerAlt className="mr-2" />
          Store Location: No.2A, Down Town Road No 7, Phum Kork Chambak, Phnom Penh
        </Typography>
        <div className="flex items-center gap-4">
          <select className="text-gray-500 text-sm border-none outline-none bg-transparent">
            <option value="Eng">Eng</option>
            <option value="Khmer">Khmer</option>
          </select>
          <div className="hidden md:block h-4 border-r border-gray-300"></div>
          <Typography className="text-gray-500 text-sm">
            <Link href="/signin">Sign In</Link>
          </Typography>
          <Typography className="text-gray-500 text-sm">
            <Link href="/signup">Sign Up</Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export { TopNav };
