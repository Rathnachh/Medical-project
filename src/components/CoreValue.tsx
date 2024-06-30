
import React from 'react';
import Image from 'next/image';
import Container from './Container';

const CoreValueSection: React.FC = () => {
  const values = [
    {
      iconSrc: '/about/platform.svg', 
      title: 'Platform',
      description: 'We keep Flowbite, secure, and free of spam and abuse so that this can be the platform where developers come together to create.',
    },
    {
      iconSrc: '/about/premium.svg', 
      title: 'Premium products',
      description: 'We embody the shift toward investments in safe and secure software design practices with our world-class front-end products.',
    },
    {
      iconSrc: '/about/feature.svg', 
      title: 'Features',
      description: 'Start with thousands of actions and applications from our community to help you build, improve, and accelerate your automated workflows.',
    },
    {
      iconSrc: '/about/support2.svg', 
      title: 'Support 24/7',
      description: 'We provide high-quality services all around the world with personal assistance through our 24/7 premium service.',
    },
  ];

  return (
    <div className="py-16 bg-gray-50 w-full">
<Container>
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Core Value</h2>
        <p className="text-gray-500 mb-12">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg gap-2 shadow-md p-4">
              <Image src={value.iconSrc} alt={value.title} width={48} height={48}  />
              <h3 className="text-xl font-semibold mt-4 text-left">{value.title}</h3>
              <p className="text-gray-500 mt-2 text-left">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
  );
};

export default CoreValueSection;
