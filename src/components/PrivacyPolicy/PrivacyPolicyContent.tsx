"use client";

import { useTranslations } from "next-intl";

const PrivacyPolicyContent = () => {
  const t = useTranslations("privacyPolicy");
  const privacyPolicyLength = 4;
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container space-y-[10px]">
        {[...Array(privacyPolicyLength)].map((_, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3] mb-2">
              {t(`privacyRule${index + 1}Text`)}
            </h3>
            <p>{t(`privacyRule${index + 1}SubText`)}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyContent;
