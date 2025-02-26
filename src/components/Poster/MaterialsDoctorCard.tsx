import Link from "next/link";
import React from "react";
import { FiArrowRight } from 'react-icons/fi';

const MaterialsDoctorCard= () => {
  return (
    <div
      className="relative w-full bg-cover bg-center rounded-lg h-[584px]"
      style={{ backgroundImage: `url('/poster/poster2.png')` }}
    >
      <div className="relative z-10 space-y-[20px] p-6 flex flex-col items-center text-center w-full">
        <p className="text-sm text-white capitalize tracking-[1px]">
          New products
        </p>
        <h3 className="text-4xl font-bold text-white">Materials Doctor</h3>
        <span className="text-white">
          Started at <strong className="text-red-600">$79.99</strong>
        </span>
        <Link href="/blog">
        <button className="mt-6 px-10 py-[13.5px] font-semibold bg-white text-[#008001] rounded-full border-[#008001] border-2 flex items-center justify-center space-x-2">
          <span>Shop Now</span>
          <FiArrowRight />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MaterialsDoctorCard;
