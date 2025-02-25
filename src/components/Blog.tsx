import React from "react";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
import Link from "next/link";
import Container from "@/components/Container";

const blogPosts = [
  {
    imageSrc: "/blog/blog1.png",
    date: "18",
    month: "NOV",
    category: "Food",
    author: "Admin",
    comments: 65,
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
  },
  {
    imageSrc: "/blog/blog2.png",
    date: "18",
    month: "NOV",
    category: "Travel",
    author: "Admin",
    comments: 42,
    title:
      "Aliquam erat volutpat. Integer id orci ut libero tincidunt efficitur.",
  },
  {
    imageSrc: "/blog/blog3.png",
    date: "18",
    month: "NOV",
    category: "Technology",
    author: "Admin",
    comments: 30,
    title: "Donec non velit nec purus euismod vestibulum ac at nunc.",
  },
];

const Blog = () => {

  return (

    <Link href='/blog'>
    <div className="container mx-auto px-4 sm:px-6 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
          Daily Blog
        </h2>
        <Link
          href="/blog"
          className="flex items-center text-green-600 hover:underline mt-4 md:mt-0"
        >
          <span className="text-sm md:text-base font-medium">View All</span>
          <IoArrowForwardOutline className="ml-1 text-lg" />
        </Link>
      </div>

      {/* Blog Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-gray-200 rounded-lg transition-shadow hover:shadow-md"
          >
            <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src={post.imageSrc}
                alt="blog"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute bottom-4 left-4 flex flex-col items-center bg-gray-50 w-14 h-14 rounded-md shadow-md">
                <p className="text-lg font-semibold text-[#1A1A1A]">
                  {post.date}
                </p>
                <p className="text-xs text-[#808080]">{post.month}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-normal text-[#666666]">
                <GoTag />
                <p>{post.category}</p>
                <CiUser />
                <p>By {post.author}</p>
                <VscComment />
                <p>{post.comments} Comments</p>
              </div>
              <h3 className="mt-3 text-sm md:text-base font-medium text-green-600">
                {post.title}
              </h3>
              <div className="flex items-center mt-4 font-semibold text-green-600 text-sm md:text-base">
                <button className="mr-2">Read More</button>
                <IoArrowForwardOutline />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Link>
  );
};

export default Blog;
