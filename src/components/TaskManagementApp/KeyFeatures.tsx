"use client";

import React from "react";
import Link from "next/link";

const featuresData = [
  {
    id: "1",
    icon: "flaticon-task",
    title: "Create Reservations",
    shortText:
      "Streamline the booking process with our intuitive reservation system, allowing clients to easily schedule their salon appointments in just a few clicks.", aosDelay: "100",
  },
  {
    id: "2",
    icon: "flaticon-planning",
    title: "Booking Management",
    shortText:
      "Effortlessly organize and oversee all your salon bookings, ensuring no double bookings or scheduling conflicts, thanks to our robust management tools.", aosDelay: "200",
  },
  {
    id: "3",
    icon: "flaticon-third-party",
    title: "Staff Management",
    shortText:
      "Empower your team with our staff management features, enabling you to assign tasks, track performance, and optimize your salon's operations for a seamless customer experience.", aosDelay: "300",
  },
  {
    id: "4",
    icon: "flaticon-completed-task",
    title: "Reporting & Analytics",
    shortText:
      "Gain valuable insights into your salon's performance and customer trends through our comprehensive reporting and analytics tools, helping you make data-driven decisions for business growth.", aosDelay: "400",
  },
  {
    id: "5",
    icon: "flaticon-time-tracking",
    title: "Notifications Center",
    shortText:
      "Simplify financial transactions with secure and efficient payment processing capabilities, allowing clients to pay for services hassle-free and ensuring your revenue is managed with ease.", aosDelay: "500",
  },
  {
    id: "6",
    icon: "flaticon-refresh",
    title: "Payment Processing",
    shortText:
      "Keep your clients informed and engaged through our notifications center, where you can send timely updates, reminders, and promotions, enhancing customer satisfaction and loyalty.", aosDelay: "600",
  },
];

const KeyFeatures: React.FC = () => {
  return (
    <>
      <div id="features" className="bg-[#F9F3EF] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
        <div 
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay='100'
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              Key Features
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              A great booking solution to skip the waiting line
            </h2>
          </div>
          {featuresData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="bg-white rounded-[15px] p-[30px] md:p-[40px] group hover:bg-primary-color"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <div className="bg-[#D4EDFF] text-primary-color w-[70px] h-[70px] leading-[70px] rounded-full text-center text-[40px] mb-[25px] transition duration-500 ease-in-out group-hover:scale-[1.1] group-hover:bg-white">
                      <i className={value.icon}></i>
                    </div>
                    <h3 className="text-[22px] md:text-[24px] mb-[15px] group-hover:text-white">
                      {value.title}
                    </h3>
                    <p className="group-hover:text-white">{value.shortText}</p>
                  </div>
                ))}
            </div>
          )}

          <div 
            className="text-center mt-[30px] md:mt-[50px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
