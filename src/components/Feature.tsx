import React from 'react';
import { Typography } from '@mui/material';
import Image from "next/legacy/image";

const features = [
  {
    icon: (
        <Image
          src="/feature/free-shipping.svg"
          alt="Free Shipping"
          width={72} height={72}
        />
      ),
    title: 'Free Shipping',
    description: 'Free shipping on all orders',
  },
  {
    icon: (
      <Image
        src="/feature/get-support.svg"
        alt="get-support"
        width={72} height={72}
      />
    ),
    title: 'Great Support 24/7',
    description: 'Instant access to Contact',
  },
  {
    icon: (
      <Image
        src="/feature/payment.svg"
        alt="payment"
        width={72} height={72}
      />
    ),
    title: '100% Secure Payment',
    description: 'We ensure your money is save',
  },
  {
    icon: (
      <Image
        src="/feature/guaratee.svg"
        alt="Money-Back Guarantee"
        width={72} height={72}
      />
    ),
    title: 'Money-Back Guarantee',
    description: '30 days money-back',
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-4 ">
                {feature.icon}
              </div>
              <Typography className="text-lg font-medium">{feature.title}</Typography >
              <Typography  className="text-gray-600 mt-2" fontSize={14}>{feature.description}</Typography >
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export {Features};