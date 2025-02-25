
import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

type ProductWithDiscount = {
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  rating: number;
  category: string;
};

type ProductWithoutDiscount = {
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  category: string;
};

type Product = ProductWithDiscount | ProductWithoutDiscount;

const productData: ProductWithoutDiscount = {
  name: "Sarasoft AG",
  price: "$14.99",
  originalPrice: "$20.99",
  image: "/pop-product.svg",
  rating: 4,
  category: "HealthCare",
};

const products: Product[] = [
  { ...productData, image: "/pop-product.svg", discount: "50%" },
  { ...productData, discount: "50%" },
  { ...productData },
  { ...productData },
  { ...productData, discount: "50%" },
  { ...productData },
  { ...productData },
  { ...productData },
];

const Product = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold">
          Popular Products
        </h2>
        <div className="flex items-center space-x-2 text-[#008001] cursor-pointer hover:underline">
          <h2 className="text-[14px] sm:text-[16px] font-medium">View All</h2>
          <FiArrowRight />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center border border-gray-200 rounded-lg p-4 transition-shadow hover:shadow-md"
          >
            {/* Image Container */}
            <div className="relative w-[150px] h-[150px]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
              {'discount' in product && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col items-center mt-3">
              <Typography variant="body2" className="text-center text-[14px] sm:text-[16px]">
                {product.name}
              </Typography>
              <div className="flex items-center mt-2">
                <span className="text-xl font-bold text-green-600">
                  {product.price}
                </span>
                <span className="text-gray-400 line-through ml-2">
                  {product.originalPrice}
                </span>
              </div>

              {/* Rating Section */}
              <div className="flex items-center mt-2">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.543-4.755-4.63 6.564-.955L10 0l2.946 5.962 6.564.955-4.755 4.63 1.123 6.543z" />
                  </svg>
                ))}
                {Array.from({ length: 5 - product.rating }).map((_, i) => (
                  <svg
                    key={i + product.rating}
                    className="w-4 h-4 text-gray-300 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.543-4.755-4.63 6.564-.955L10 0l2.946 5.962 6.564.955-4.755 4.63 1.123 6.543z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Product };
