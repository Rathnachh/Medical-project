import React from 'react';
import { Typography, Button, MenuItem } from '@mui/material';
import { FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const TopNav: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-300">
      <div className="flex justify-between items-center px-[140px] py-3">
        <Typography className="flex items-center text-gray-400 text-sm">
          <FaMapMarkerAlt className="mr-2" />
          Store Location: No.2A, Down Town Road No 7, Phum Kork Chambak, Phnom Penh
        </Typography>
        <div className="flex items-center gap-5">
        <select
            className="text-gray-400 text-sm border-none outline-none bg-transparent"
          >
            <option value="Eng">Eng</option>
            <option value="Khmer">Khmer</option>
          </select>
          <div className="h-3 border-r border-gray-300"></div>
          <Typography className="text-gray-400 text-sm">
            <Link href="/signin">
              Sign In
            </Link>
          </Typography>
          <Typography className="text-gray-400 text-sm">
            <Link href="/signup">
              Sign Up
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export { TopNav };
