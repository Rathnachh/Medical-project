import React, { FC } from 'react';
import Container from './Container';
import { FiArrowRight, FiArrowLeft} from 'react-icons/fi';

interface BlogPost {
  image: string;
  date: string;
  category: string;
  title: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "/blog/blog1.png",
    date: "18 Nov",
    category: "Food",
    title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    link: "#",
  },
  {
    image: "/blog/blog2.png",
    date: "18 Nov",
    category: "Food",
    title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    link: "#",
  },
  {
    image: "/blog/blog3.png",
    date: "18 Nov",
    category: "Food",
    title: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    link: "#",
  },
];

const BlogCard: FC<BlogPost> = ({ image, date, category, title, link }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <div className="flex items-center text-gray-500 text-sm">
        <span className="mr-2">{date}</span>
        <span className="mr-2">•</span>
        <span className="mr-2">{category}</span>
        <span className="mr-2">•</span>
        <span>By Admin</span>
        <span className="mr-2">•</span>
        <span>35 Comments</span>
      </div>
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <a href={link} className="text-green-600 mt-2 inline-block">Read More →</a>
    </div>
  </div>
);

const Blog: FC = () => {
  return (
    <Container>
        <div className="container mx-auto text-center">
          <div className="w-full flex items-center justify-between">
          <h2 className="text-[32px] font-semibold">Daily Blog</h2>
            <div className="flex items-center space-x-2">
              <FiArrowLeft />
              <FiArrowRight  />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
        </div>
      </div>
    </Container>
  );
}

export default Blog;
