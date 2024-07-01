import React from "react";
import { FaTag, FaUser, FaComment, FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, image, excerpt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-[469px] h-[394px] object-cover"
        />
        <div className="absolute bottom-[24.98px] left-[27px] bg-white text-gray-800 text-center py-[19px] px-[20px] rounded">
          <p className="text-lg font-semibold">{date.split(" ")[0]}</p>
          <p className="text-xs">{date.split(" ")[1]}</p>
        </div>
      </div>
      <div className="p-4 text-left">
        <div className="flex items-center text-xs text-gray-500 space-x-2 mb-2">
          <div className="flex items-center space-x-2">
            <FaTag className="w-5 h-5" />
            <span>Food</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUser className="w-5 h-5" />
            <span>By Admin</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaComment className="w-5 h-5" />
            <span>65 Comments</span>
          </div>
        </div>
        <p className="text-sm text-left hover:text-[#2C742F] text-gray-800 mb-4 font-medium">
          {excerpt}
        </p>
        <div className="text-[#008001] flex items-center space-x-2 font-medium">
          <span>Read More</span>
          <FaArrowRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
