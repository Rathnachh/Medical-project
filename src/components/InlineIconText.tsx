import React from 'react';
import Image from 'next/image';

interface InlineIconTextProps {
  src: string;
  alt: string;
  text: string;
}

const InlineIconText: React.FC<InlineIconTextProps> = ({ src, alt, text }) => (
  <div className="flex items-center space-x-4 mb-3">
    <Image src={src} alt={alt} width={20} height={20} className='bg-[#DEF7EC] rounded-full ' />
    <span className="text-gray-500 text-sm">{text}</span>
  </div>
);

export default InlineIconText;