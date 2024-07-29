"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavPages from "./NavPages";
import Image from "next/image";


import logo from "/public/images/logo.png";
import { useTranslations, useLocale } from "next-intl";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();
  const t = useTranslations('home');
  const locale = useLocale();
  

  // Use effect to read the user preference from local storage on component mount
  useEffect(() => {
    document.documentElement.setAttribute('dir', locale == 'ar' ? 'rtl' : 'ltr');
  }, [locale]);


  const changeLanguage = () => {
    const currentPath = window.location.pathname;
    let newPath = currentPath;

    if (currentPath.includes('/en')) {
      newPath = currentPath.replace('/en', '/ar');
    } else if (currentPath.includes('/ar')) {
      newPath = currentPath.replace('/ar', '/en');
    }

    window.location.href = newPath;
    window.location.href = newPath;
  }

  // Sticky Navbar
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        elementId?.classList.add("isSticky");
      } else {
        elementId?.classList.remove("isSticky");
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {
        if (window.scrollY > 120) {
          elementId?.classList.add("isSticky");
        } else {
          elementId?.classList.remove("isSticky");
        }
      });
    };
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        id="navbar"
        className="navbar-area bg-white relative z-[2] py-[20px] lg:py-[15px] xl:py-0"
      >
        <div className="container mx-auto max-w-[1760px] xl:px-[30px]">
          <nav
            className={`navbar relative flex flex-wrap ${
              isActive ? "active" : ""
            }`}
          >
            <div className="self-center bg-[#202020] rounded-[4px] px-[6px] py-[3px] inline-block">
                <Image 
                  src={logo} 
                  className="w-14 h-14 object-cover" 
                  alt="logo" 
                  
                />
            </div>

            {/* Toggle button */}
            <button
              className="navbar-toggler absolute ml-auto rtl:ml-0 rtl:mr-auto right-0 rtl:right-auto rtl:left-0 top-[2px] md:hidden"
              type="button"
              onClick={handleToggleSearchModal}
            >
              <span className="burger-menu text-black cursor-pointer leading-none text-[30px]">
                <i className="ri-menu-line"></i>
              </span>
            </button>

            <div className="navbar-collapse flex self-center grow basis-auto md:space-x-[20px] lg:space-x-[50px] xl:space-x-[70px] 2xl:space-x-[100px] rtl:space-x-reverse">
              <ul className="navbar-nav self-center flex-row ml-auto rtl:ml-0 rtl:mr-auto md:flex md:space-x-[15px] lg:space-x-[25px] xl:space-x-[35px] 2xl:space-x-[50px] rtl:space-x-reverse">
                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#home"
                    className="text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-primary-color"
                  >
                    {t('title')}
                  </Link>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#features"
                    className="text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-primary-color"
                  >
                    {t('about')}
                    </Link>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#contact"
                    className={`text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-primary-color ${
                      currentRoute === "/contact/" ? "text-primary-color" : ""
                    }`}
                  >
                    {t('contact')}
                    </Link>
                </li>
                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <div
                    className={`text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-primary-color cursor-pointer`}
                    onClick={() => changeLanguage()}
                  >
                    E | ع
                  </div>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
