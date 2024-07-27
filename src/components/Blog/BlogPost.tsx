"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination";

const blogData = [
  {
    id: "1",
    image: "/images/blog/blog-post1.jpg", // Recommended image size 1270x900
    category: "Time management",
    title: "15 Time Management Tips that will Change your Life",
    previewLink: "/blog/blog-details",
    author: "Admin",
    date: "20 May, 2023",
    aosDelay: "100",
  },
  {
    id: "2",
    image: "/images/blog/blog-post2.jpg", // Recommended image size 1270x900
    category: "Time management",
    title: "11 Steps to Help College Students With Task Management System",
    previewLink: "/blog/blog-details",
    author: "Admin",
    date: "21 May, 2023",
    aosDelay: "200",
  },
  {
    id: "3",
    image: "/images/blog/blog-post3.jpg", // Recommended image size 1270x900
    category: "Customer Service",
    title: "5 Things I Learned About Task Management as a Business Leader",
    previewLink: "/blog/blog-details",
    author: "Admin",
    date: "22 May, 2023",
    aosDelay: "300",
  },
  {
    id: "4",
    image: "/images/blog/blog-post4.jpg", // Recommended image size 1270x900
    category: "Branding",
    title: "Branding involves developing strategy to create a point",
    previewLink: "/blog/blog-details",
    author: "Admin",
    date: "23 May, 2023",
    aosDelay: "400",
  },
  {
    id: "5",
    image: "/images/blog/blog-post5.jpg", // Recommended image size 1270x900
    category: "Design",
    title: "Design is a plan or specification for the construction of an object",
    previewLink: "/blog/blog-details",
    author: "Admin",
    date: "24 May, 2023",
    aosDelay: "500",
  },
  {
    id: "6",
    image: "/images/blog/blog-post6.jpg", // Recommended image size 1270x900
    category: "Digital",
    title: "The new minimum is a digital magazine with a header featuring",
    previewLink: "/blog/blog-details",
    author: "Admin",
    date: "25 May, 2023",
    aosDelay: "600",
  },
];

const BlogPost: React.FC = () => {
  return (
    <>
      <div id="blog" className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          {blogData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogData &&
                blogData.map((value, i) => (
                  <div 
                    className="bg-[#F9F3EF] rounded-[20px] group"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <Link href={value.previewLink}>
                      <Image
                        src={value.image}
                        alt="blog"
                        className="rounded-t-[20px]"
                        width={1270}
                        height={900}
                      />
                    </Link>

                    <div className="bg-[#F9F3EF] rounded-[20px] py-[40px] px-[30px] relative mt-[-16px] transition duration-500 ease-in-out group-hover:bg-[#F7F1FF]">
                      <p className="text-primary-color uppercase text-[15px] mb-[10px]">
                        {value.category}
                      </p>

                      <h3 className="text-[20px] xl:text-[22px] leading-[32px] mb-[15px]">
                        <Link
                          href={value.previewLink}
                          className="transition duration-500 ease-in-out hover:text-primary-color"
                        >
                          {value.title}
                        </Link>
                      </h3>

                      <div className="flex items-center space-x-[15px] md:space-x-[30px] rtl:space-x-reverse">
                        <div className="flex items-center space-x-[8px] rtl:space-x-reverse">
                          <i className="flaticon-user-1"></i>
                          <p>{value.author}</p>
                        </div>

                        <div className="flex items-center space-x-[8px] rtl:space-x-reverse">
                          <i className="flaticon-calendar"></i>
                          <p>{value.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
