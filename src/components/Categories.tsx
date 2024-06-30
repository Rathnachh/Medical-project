import React from 'react'
import Container from './Container';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/legacy/image';
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
      <Container>
        <div className="max-w-7xl mx-auto py-8">
        <div className="flex items-center justify-between">
            <h2 className="text-[32px] font-semibold">Popular Categories</h2>
            <div className="flex items-center space-x-2 text-[#008001]">
              <h2 className="text-[16px] font-medium">View All</h2>
              <FiArrowRight />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-[32px]">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center border border-gray-100 p-4">
                <Image src={category.image} alt={category.name} width={176} height={160} />
                <span className="mt-2">{category.name}</span>
              </div>
            ))}
          </div>
          
        </div>
        </Container>
      );
    };

export {Categories}
