"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/images/logo.png";

// navLinkData
const navLinkData = [
  {
    id: "1",
    text: "Privacy Policy",
    link: "#privacy-policy",
  },
  {
    id: "2",
    text: "Contact",
    link: "/#contact/",
  },
];

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "flaticon-whatsapp",
    link: "https://wa.me/message/77M2A5PDX4D4M1",
  },
  {
    id: "2",
    icon: "flaticon-twitter",
    link: "https://www.twitter.com/@BeFreshsa",
  },
  {
    id: "3",
    icon: "flaticon-linkedin",
    link: "https://www.linkedin.com/in/be-fresh-93a868280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#080D27] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[60px]">
        <div className="container">
          <div className="grid gap-[20px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div 
              className="text-center lg:text-start"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
                <Image src={logo} alt="logo" className="inline-block w-16 h-16" />
            </div>

            <div className="lg:col-span-2 text-center lg:text-end">
              {navLinkData && (
                <ul 
                  className="space-y-[10px] space-x-[30px] md:space-x-[50px] xl:space-x-[80px] 2xl:space-x-[100px] rtl:space-x-reverse"
                  data-aos="fade-in"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="false"
                >
                  {navLinkData &&
                    navLinkData.map((value, i) => (
                      <li
                        className="inline-block font-semibold text-[#BFC3E1] hover:text-primary-color"
                        key={i}
                      >
                        <Link href={value.link}>{value.text}</Link>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>

          <hr className="border-[#384179] my-[30px] md:my-[50px]" />

          <div className="grid gap-[15px] items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="text-center md:text-start">
              <p className="text-[#BFC3E1]">
                © <span className="text-white">Be-fresh</span>. All Rights Reserved
                by <span className="text-white">AL-MAJTAMA MATOUR</span>
              </p>
            </div>

            <div className="text-center md:text-end">
              {socialLinksData && (
                <div className="space-x-[10px] rtl:space-x-reverse" >
                  {socialLinksData &&
                    socialLinksData.map((value, i) => (
                      <li className="inline-block" key={i}>
                        <a
                          href={value.link}
                          target="_blank"
                          className="
                          bg-[#384179]
                            w-[30px]
                            h-[30px]
                            leading-[30px]
                            text-center
                            rounded-full
                            text-[14px]
                            text-[#BFC3E1]
                            inline-block
                            transition duration-500 ease-in-out
                            hover:bg-primary-color
                            hover:text-white
                          "
                        >
                          <i className={value.icon}></i>
                        </a>
                      </li>     
                    ))}
                </div>         
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
