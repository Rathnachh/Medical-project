import React from "react";

const tags = [
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Meat",
  "Lunch",
  "Dinner",
];

const PopularTags = () => {
  return (
    <div>
      <span className="text-[20px] font-medium text-[#111928]">
        Popular Tag
      </span>
      <div className="flex flex-wrap mt-4 space-x-2 space-y-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 mt-2 text-sm font-medium bg-gray-100 text-gray-800 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
