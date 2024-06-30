import React from 'react'
import Container from './Container';
const banners = [
    {
      title: "Sale of the Month",
      description: "Best Deals",
      timer: "00 DAYS : 02 HRS : 18 MINS : 46 SECS",
      buttonText: "Shop Now",
      link: "/shop",
      image: "/poster/poster1.png",
      bgColor: "bg-green-200",
    },
    {
      title: "Materials Doctor",
      description: "New Products",
      price: "Started at $79.99",
      buttonText: "Shop Now",
      link: "/shop",
      image: "/poster/poster2.png",
      bgColor: "bg-teal-200",
    },
    {
      title: "Discount",
      description: "Summer Sale",
      discount: "Up to 64% OFF",
      buttonText: "Shop Now",
      link: "/shop",
      image: "/poster/poster3.png",
      bgColor: "bg-gray-200",
    },
  ];
const Banner = () => {
    return (
      <Container>
        <div className="max-w-7xl mx-auto py-8">
          <div className="grid grid-cols-3 gap-6">
            {banners.map((banner, index) => (
              <div key={index} className={`relative p-6 rounded-lg shadow-md ${banner.bgColor}`}>
                <img src={banner.image} alt={banner.title} className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold mb-2">{banner.title}</h3>
                  <p className="text-gray-700 mb-4">{banner.description}</p>
                  {banner.timer && <p className="text-gray-600 mb-4">{banner.timer}</p>}
                  {banner.price && <p className="text-gray-600 mb-4">{banner.price}</p>}
                  {banner.discount && <p className="text-gray-600 mb-4">{banner.discount}</p>}
                  <a href={banner.link} className="inline-block bg-green-500 text-white py-2 px-4 rounded">
                    {banner.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Container>
      );
    };

export default Banner
