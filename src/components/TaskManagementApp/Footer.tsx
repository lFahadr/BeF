"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import logo from "/public/images/logo.png";

// navLinkData
const navLinkData = [
  {
    id: "1",
    text: "privacyPolicy",
    link: "/privacy-policy",
  },
  {
    id: "2",
    text: "contact",
    link: "/#contact",
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
  const t = useTranslations("home");
  const currentRoute = usePathname();
  const isRoot = currentRoute === "/en/" || currentRoute === "/ar/";

  return (
    <>
      <footer className="bg-[#080D27] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[60px]">
        <div className="container">
          <div className="grid gap-[20px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <Image src={logo} alt="logo" className="inline-block w-16 h-16" />
            <div className="lg:col-span-2 text-center lg:text-end">
              {navLinkData && (
                <ul className="space-y-[10px] space-x-[30px] md:space-x-[50px] xl:space-x-[80px] 2xl:space-x-[100px] rtl:space-x-reverse">
                  {navLinkData &&
                    navLinkData.map((value, i) => (
                      <li
                        className="inline-block font-semibold text-[#BFC3E1] hover:text-primary-color"
                        key={i}
                      >
                        <Link href={value.link}>{t(value.text)}</Link>
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
                © <span className="text-white">Be-fresh</span>. {t("allRight")}
                <span className="text-white"> {t("companyName")}</span>
              </p>
            </div>

            <div className="text-center md:text-end">
              {socialLinksData && (
                <div className="space-x-[10px] rtl:space-x-reverse">
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