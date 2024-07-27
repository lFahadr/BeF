"use client";

import React from "react";
import Image from "next/image";

import appDownloadImg from "/public/images/task-management-app/app-download.png";

const AppDownload: React.FC = () => {
  return (
    <>
      <div id="download" className="px-[15px] xl:px-[30px]">
        <div
          className="max-w-[1700px] mx-auto rounded-[20px] py-[40px] md:py-[70px] px-[15px] lg:p-0"
          style={{
            background:
              "linear-gradient(277deg, #19AFFF 17.64%, #0A65FC 76.53%)",
          }}
        >
          <div className="container">
            <div className="grid gap-[25px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div 
                className="max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left rtl:lg:text-right"
                data-aos="fade-up"
                data-aos-delay='100'
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h6 className="text-white uppercase text-[16px] md:text-[18px] font-medium mb-[10px]">
                  Download app
                </h6>

                <h2 className="text-white text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Let&rsquo;s get Free download From Apple Store
                </h2>

                <p className="text-white">
                With its comprehensive features, user-friendly interface, and focus on
                empowering salon owners and enhancing the customer experience, our salon
                reservation app is poised to transform the way beauty establishments manage
                appointments and engage with their clients. Join us in revolutionizing the
                beauty industry and unlocking new levels of success for your salon business.
                </p>

                <div className="mt-[30px] md:mt-[50px] space-x-[15px] md:space-x-[30px] rtl:space-x-reverse space-y-[15px] sm:space-y-[0]">
                  <a
                    href="https://apps.apple.com/us/app/befresh-sa/id6474939840"
                    target="_blank"
                    className="inline-block"
                  >
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-[#262A37] py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-[#000]">
                      <i className="flaticon-apple text-white text-[28px]"></i>
                      <div>
                        <p className="text-white text-[12px] leading-none mb-[6px]">
                          available on
                        </p>
                        <h4 className="text-white text-[15px] font-medium leading-none">
                          Apple Store
                        </h4>
                      </div>
                    </div>
                  </a>

                </div>
              </div>

              <div 
                className="relative text-center"
                data-aos="fade-up"
                data-aos-delay='200'
                data-aos-duration="600"
                data-aos-once="false"
              >
                <Image
                  src={appDownloadImg}
                  alt="App Download"
                  className="inline-block lg:scale-[1.2]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
