import React from "react";
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
// import Countdown from 'react-countdown';

const SaleOfTheMonthCard: React.FC = () => {
  // const targetDate = new Date('2024-12-31T23:59:59');
  
  return (
    <div
      className="relative w-full bg-cover bg-center rounded-lg h-[584px]"
      style={{
        backgroundImage: `url('/poster/poster1.png')`,
        objectFit: "cover",
      }}
    >
      <div className="relative z-10 space-y-4 p-6 flex flex-col items-center text-center w-full">
        <p className="text-sm text-gray-500 capitalize tracking-[1px]">
          BEST DEALS
        </p>
        <h3 className="text-4xl font-bold text-gray-800">Sale of the Month</h3>
        {/* <Countdown date={targetDate} /> */}
        <Link href="/blog">
        <button className="mt-6 px-8 py-4 bg-[#008001] text-white rounded-full flex items-center justify-center space-x-2">
          <span>Shop Now</span>
          <FiArrowRight />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SaleOfTheMonthCard;
