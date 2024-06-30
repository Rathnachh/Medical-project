import React from 'react';
import Container from './Container';
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
    <Container>
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[32px] font-semibold">Popular Products</h2>
          <div className="flex items-center space-x-2 text-[#008001]">
            <h2 className="text-[16px] font-medium">View All</h2>
            <FiArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[32px]">
          {products.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md relative flex flex-col"
            >
              {'discount' in product && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  Sale {product.discount}
                </div>
              )}
              <Image
                src={product.image}
                alt={product.name}
                height={370}
                width={370}
                className="object-cover mb-4"
              />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <Typography className="text-gray-500" fontSize={14}>
                    {product.category}
                  </Typography>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center mt-2">
                    <span className="text-xl font-bold text-green-600">
                      {product.price}
                    </span>
                    <span className="text-gray-400 line-through ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
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
                <div className="flex items-center mt-7">
                  <Image src="/lock.svg" alt="logo" width={50} height={50} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Product;
