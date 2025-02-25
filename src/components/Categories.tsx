import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/legacy/image";

const categories = [
  { name: "Syringe and needles", image: "/categories/syringe.svg" },
  { name: "Suture", image: "/categories/suture.svg" },
  { name: "Blood Bag", image: "/categories/blood-bag.svg" },
  { name: "Blood Lancet", image: "/categories/blood-lancet.svg" },
  { name: "Urine Bag", image: "/categories/urine-bag.svg" },
  { name: "Medical Tube", image: "/categories/medical-tube.svg" },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold">
          Popular Categories
        </h2>
        <div className="flex items-center space-x-2 text-[#008001] cursor-pointer hover:underline">
          <h2 className="text-[14px] sm:text-[16px] font-medium">View All</h2>
          <FiArrowRight />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center border border-gray-200 rounded-lg p-4 transition-shadow hover:shadow-md"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={150}
              height={140}
              className="object-contain"
            />
            <span className="mt-3 text-center text-[14px] sm:text-[16px]">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Categories };
