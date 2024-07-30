import Navbar from "@/components/TaskManagementApp/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";
import Footer from "@/components/TaskManagementApp/Footer";
import TermsAndCondition from "@/components/PrivacyPolicy/TermsAndCondition";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations();
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title={t("privacyPolicy.privacyPolicy")}
        homeText={t("home.title")}
        homeUrl="/"
      />

      <PrivacyPolicyContent />

      <PageBannerTitle
        title={t("privacyPolicy.termsAndConditions")}
        homeText={t("home.title")}
        homeUrl="/"
      />

      <TermsAndCondition />

      <Footer />
    </>
  );
}
