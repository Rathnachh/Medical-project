import { Metadata } from "next";
import React from "react";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { CiSliderHorizontal } from "react-icons/ci";
import SideBar from "@/components/SideBar";
import BlogCard from "@/components/BlogCardSection";
import Pagination from "@/components/Pagination";
import { Navbar } from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import  Footer from '@/components/Footer';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: "Blogs",
};

const TOTAL_PAGES = 21; 

const Blog = () => {
  // Embedding blog data directly
  const blogData = [
    {
        "id": 1,
        "imageSrc": "/blog/blog4.svg",
        "date": "18",
        "month": "NOV",
        "category": "Illness",
        "author": "Admin",
        "comments": 65,
        "title": "The Role of Public Health in Disease Prevention",
        "subTitle": "Strategies for a Healthier Future",
        "subImageUrl": ["", ""],
        "user": {
          "date": "4 April, 2021",
          "read": "6 min read",
          "name": "John Doe"
        },
        "descriptionTop": "In this insightful exploration, we delve deep into the lasting impact of COVID-19 on global health systems, economies, and societal structures. As we reflect on the challenges faced during the pandemic, we uncover valuable lessons in pandemic preparedness and response. From the rapid development of vaccines to the resilience of healthcare infrastructure, discover the transformative changes that have reshaped our approach to public health. This blog chronicles the scientific breakthroughs, international collaborations, and community resilience that emerged in the wake of COVID-19, offering a profound analysis of how the world navigated one of its most challenging health crises.",
        "descriptionBottom": "In this insightful exploration, we delve deep into the lasting impact of COVID"
      },
      {
        "id": 2,
        "imageSrc": "/blog/blog5.svg",
        "date": "22",
        "month": "NOV",
        "category": "Chronic Diseases",
        "author": "Admin",
        "comments": 45,
        "title": "Managing Diabetes: Innovations and Challenges",
        "subTitle": "Exploring the Future of Diabetes Care",
        "subImageUrl": ["", ""],
        "user": {
          "date": "10 April, 2021",
          "read": "7 min read",
          "name": "Wick Daru"
        },
        "descriptionTop": "This blog post explores the evolving landscape of diabetes management, highlighting the latest innovations in treatment and the ongoing challenges faced by patients and healthcare providers. From advancements in insulin delivery systems to the development of new medications, we examine how these breakthroughs are transforming lives. Additionally, we discuss the importance of lifestyle changes, early diagnosis, and continuous monitoring in managing this chronic disease effectively.",
        "descriptionBottom": "Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies."
      },
      {
        "id": 3,
        "imageSrc": "/blog/blog6.svg",
        "date": "28",
        "month": "NOV",
        "category": "Mental Health",
        "author": "Admin",
        "comments": 78,
        "title": "Breaking the Stigma: Mental Health Awareness and Support",
        "subTitle": "Creating a Supportive Environment for Mental Wellness",
        "subImageUrl": ["", ""],
        "user": {
          "date": "15 May, 2021",
          "read": "8 min read",
          "name": "Emily Johnson"
        },
        "descriptionTop": "Mental health is a critical aspect of overall well-being, yet it often remains shrouded in stigma. In this blog, we shed light on the importance of mental health awareness, the challenges individuals face in seeking help, and the various support systems available. We explore the role of community initiatives, policy changes, and innovative therapies in fostering a more supportive environment for those struggling with mental health issues.",
        "descriptionBottom": "Join us as we navigate the complexities of mental health, advocate for compassionate care, and highlight stories of resilience and recovery."
      },
      {
        "id": 4,
        "imageSrc": "/blog/blog7.svg",
        "date": "05",
        "month": "DEC",
        "category": "Vaccination",
        "author": "Admin",
        "comments": 112,
        "title": "The Science Behind Vaccines: Understanding Immunization",
        "subTitle": "Unveiling the Mechanisms of Vaccine Efficacy",
        "subImageUrl": ["", ""],
        "user": {
          "date": "20 June, 2021",
          "read": "9 min read",
          "name": "James Smith"
        },
        "descriptionTop": "Vaccination is one of the most effective public health strategies to prevent infectious diseases. This blog dives into the science behind vaccines, explaining how they work, their development process, and their impact on global health. We discuss the history of vaccines, the technological advancements that have led to new and improved immunizations, and the challenges faced in vaccine distribution and acceptance.",
        "descriptionBottom": "Explore the vital role vaccines play in safeguarding communities, preventing outbreaks, and promoting long-term health."
      },
      {
        "id": 5,
        "imageSrc": "/blog/blog8.svg",
        "date": "12",
        "month": "DEC",
        "category": "Heart Disease",
        "author": "Admin",
        "comments": 98,
        "title": "Heart Disease Prevention: Tips for a Healthy Heart",
        "subTitle": "Practical Advice for Cardiovascular Wellness",
        "subImageUrl": ["", ""],
        "user": {
          "date": "30 June, 2021",
          "read": "6 min read",
          "name": "Sophia Brown"
        },
        "descriptionTop": "Heart disease remains a leading cause of death worldwide, but many cases can be prevented with lifestyle modifications and early interventions. In this blog, we provide practical tips for maintaining a healthy heart, including dietary recommendations, exercise routines, and stress management techniques. We also highlight the importance of regular health screenings and early detection in preventing heart-related complications.",
        "descriptionBottom": "Learn how small changes can make a big difference in heart health and how you can take proactive steps to protect your heart."
      },
      {
        "id": 6,
        "imageSrc": "/blog/blog9.svg",
        "date": "19",
        "month": "DEC",
        "category": "Cancer",
        "author": "Admin",
        "comments": 120,
        "title": "Advances in Cancer Treatment: Hope for the Future",
        "subTitle": "Emerging Therapies and Breakthrough Research",
        "subImageUrl": ["", ""],
        "user": {
          "date": "15 July, 2021",
          "read": "8 min read",
          "name": "Benjamin Martinez"
        },
        "descriptionTop": "Cancer research has made significant strides in recent years, leading to new and improved treatments that offer hope for patients. This blog highlights the latest advancements in cancer therapy, including immunotherapy, targeted therapy, and personalized medicine. We discuss how these treatments work, their benefits, and the potential they hold for improving patient outcomes.",
        "descriptionBottom": "Discover the groundbreaking research and clinical trials that are paving the way for more effective and less invasive cancer treatments."
      },
      {
        "id": 7,
        "imageSrc": "/blog/blog10.svg",
        "date": "26",
        "month": "DEC",
        "category": "Public Health",
        "author": "Admin",
        "comments": 53,
        "title": "The Role of Public Health in Disease Prevention",
        "subTitle": "Strategies for a Healthier Future",
        "subImageUrl": ["", ""],
        "user": {
          "date": "22 July, 2021",
          "read": "7 min read",
          "name": "Olivia Davis"
        },
        "descriptionTop": "Public health initiatives play a crucial role in preventing disease and promoting wellness across populations. In this blog, we explore the various strategies used by public health organizations to combat infectious diseases, chronic illnesses, and health disparities. We examine the importance of health education, vaccination programs, and community outreach in building healthier communities.",
        "descriptionBottom": "Learn about the vital work of public health professionals and how their efforts contribute to a safer, healthier world."
      },
      {
        "id": 8,
        "imageSrc": "/blog/blog11.svg",
        "date": "02",
        "month": "JAN",
        "category": "Nutrition",
        "author": "Admin",
        "comments": 64,
        "title": "Nutrition and Health: Building a Balanced Diet",
        "subTitle": "Key Elements of a Nutritious Lifestyle",
        "subImageUrl": ["", ""],
        "user": {
          "date": "05 August, 2021",
          "read": "6 min read",
          "name": "Alexander Wilson"
        },
        "descriptionTop": "A balanced diet is fundamental to maintaining good health and preventing chronic diseases. This blog provides insights into the principles of healthy eating, the role of different nutrients, and the benefits of a varied diet. We offer practical advice on meal planning, mindful eating, and making informed food choices to support overall well-being.",
        "descriptionBottom": "Explore the connection between nutrition and health, and discover how you can create a diet that nourishes your body and mind."
      }
    ]

  return (
    <>
    <Navbar />

      <div className="w-full lg:container mx-auto h-full mb-10 px-2 lg:px-0">
      <Breadcrumb />
        <div className="flex justify-between items-center ">
          <div>
            <button className="flex items-center justify-center rounded-full w-[80px] h-[30px] md:w-[152px] md:h-[52px] text-sm md:text-base bg-green-600">
              Filter <CiSliderHorizontal className="ml-2" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="mr-1 md:mr-2">
              Sort by:
            </label>
            <select className="border border-[#D1D5DB] rounded-[8px] py-[5px] md:py-[8px] md:px-[18px] text-[#6B7280] focus:ring-green-500 focus:border-green-500">
              <option defaultValue="latest">Latest</option>
              <option value="1 week">1 week ago</option>
              <option value="2 weeks">2 weeks ago</option>
              <option value="1 month">1 month ago</option>
            </select>
          </div>
          <div>
            <p className="text-[#666666] text-sm md:text-base">
              <span className="text-[#1A1A1A] font-medium">{blogData.length}</span> Results Found
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          <div className="col-span-12 lg:col-span-4">
            <SideBar />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <BlogCard posts={blogData} />
            <div className="flex justify-center items-center mt-10">
              <Pagination totalPages={TOTAL_PAGES} />
            </div>
          </div>
        </div>
       
      </div>
      <Footer/>
    </>
  );
};

export default Blog;
