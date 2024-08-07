"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import bannerVector from "/public/images/expense-tracker-app/banner-vector.png";
import { useTranslations } from "next-intl";
import {useLocale} from 'next-intl';


const HeroBanner: React.FC = () => {
  const t = useTranslations("home");
  const isRtl = useLocale() === 'ar' ? true : false;
  const heroBanner1 = isRtl ? "/images/expense-tracker-app/hero-banner1A.png" : "/images/expense-tracker-app/hero-banner1.png";
  return (
    <>
      <div
        id="home"
        className="relative overflow-hidden bg-white pt-[50px] md:pt-[60px] lg:pt-[60px] xl:pt-[60px]"
      >
        <div
          id="home"
          className="container xl:max-w-[1980px] xl:px-[30px] relative z-[1]"
        >
          <div className="grid gap-[30px] items-end grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
            <div className="space-y-[30px] md:space-y-[40px] lg:space-y-[30px] xl:space-y-[40px] md:max-w-[730px] xl:pb-[70px] 2xl:pb-[150px] xl:pr-[30px] 2xl:pr-[100px] ml-auto lg:mr-auto xl:mr-0 text-center xl:text-start relative">
              <div>
                <h1
                  className="text-[30px] sm:text-[35px] md:text-[42px] lg:text-[40px] xl:text-[40px] 2xl:text-[55px] leading-[40px] sm:leading-[46px] md:leading-[55px] xl:leading-[50px] 2xl:leading-[64px] mb-[20px] md:mb-[30px] lg:mb-[20px] xl:mb-[30px]"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  {t("heroText1")}
                </h1>

                <p
                  className="text-[18px]"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  {t("heroText2")}
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <Link
                  href="#download"
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
                >
                  {t("downloadApp")}
                </Link>
              </div>

              <div
                className="flex items-center justify-center xl:justify-start space-x-[15px] rtl:space-x-reverse"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos-once="true"
              ></div>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image src={heroBanner1} alt="Hero Banner" width={3337} height={3337}/>
            </div>
          </div>
        </div>

        <Image
          src={bannerVector}
          alt="shape"
          className="absolute bottom-0 left-0 rtl:scale-x-[-1] bg-[#fff] w-full"
        />
      </div>
    </>
  );
};

export default HeroBanner;
