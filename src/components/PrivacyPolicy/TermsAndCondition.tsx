"use client";

import { useTranslations } from "next-intl";

const TermsAndCondition = () => {
  const t = useTranslations("privacyPolicy");
  const termsAndConditionsLength = 5;
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container space-y-[10px]">
        {[...Array(termsAndConditionsLength)].map((_, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3] mb-2">
              {t(`termsRule${index + 1}Text`)}
            </h3>
            <p>{t(`termsRule${index + 1}SubText`)}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
