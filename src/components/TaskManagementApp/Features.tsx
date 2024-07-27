"use client";

import React from "react";
import Image from "next/image";

const featuresData = [
  {
    id: "1",
    image: "/images/task-management-app/feature-icon1.png", // Recommended image size 150x130
    title: "Create Reservations",
    shortText:
      "Streamline the booking process with our intuitive reservation system, allowing clients to easily schedule their salon appointments in just a few clicks.", aosDelay: "100",
  },
  {
    id: "2",
    image: "/images/task-management-app/feature-icon2.png", // Recommended image size 150x130
    title: "Booking Management",
    shortText:
      "Effortlessly organize and oversee all your salon bookings, ensuring no double bookings or scheduling conflicts, thanks to our robust management tools.", aosDelay: "200",
  },
  {
    id: "3",
    image: "/images/task-management-app/feature-icon3.png", // Recommended image size 150x130
    title: "Staff Management",
    shortText:
      "Empower your team with our staff management features, enabling you to assign tasks, track performance, and optimize your salon's operations for a seamless customer experience.", aosDelay: "200",
  },
  {
    id: "4",
    image: "/images/task-management-app/feature-icon1.png", // Recommended image size 150x130
    title: "Reporting & Analytics",
    shortText:
      "Gain valuable insights into your salon's performance and customer trends through our comprehensive reporting and analytics tools, helping you make data-driven decisions for business growth.", aosDelay: "300",
  },
  {
    id: "5",
    image: "/images/task-management-app/feature-icon2.png", // Recommended image size 150x130
    title: "Notifications Center",
    shortText:
      "Simplify financial transactions with secure and efficient payment processing capabilities, allowing clients to pay for services hassle-free and ensuring your revenue is managed with ease.", aosDelay: "200",
  },
  {
    id: "6",
    image: "/images/task-management-app/feature-icon3.png", // Recommended image size 150x130
    title: "Payment Processing",
    shortText:
      "Keep your clients informed and engaged through our notifications center, where you can send timely updates, reminders, and promotions, enhancing customer satisfaction and loyalty.", aosDelay: "300",
  },
];

const Features: React.FC = () => {
  return (
    <>
      {featuresData && (
        <div id="about" className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
          <div className="container">
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <Image
                      src={value.image}
                      alt="Feature"
                      className="mb-[25px] transition duration-500 ease-in-out group-hover:scale-[1.1]"
                      width={150}
                      height={130}
                    />
                    <h3 className="mb-[15px] text-[22px] md:text-[24px]">
                      {value.title}
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
