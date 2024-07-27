import Navbar from "@/components/TaskManagementApp/Navbar";
import HeroBanner from "@/components/TaskManagementApp/HeroBanner";
import Features from "@/components/TaskManagementApp/Features";
import PromoVideo from "@/components/TaskManagementApp/PromoVideo";
import AboutApp from "@/components/TaskManagementApp/AboutApp";
import KeyFeatures from "@/components/TaskManagementApp/KeyFeatures";
import AppBenefits from "@/components/TaskManagementApp/AppBenefits";
import AppDownload from "@/components/TaskManagementApp/AppDownload";
import AppScreens from "@/components/TaskManagementApp/AppScreens";
import Integrations from "@/components/TaskManagementApp/Integrations";
import PricingTable from "@/components/TaskManagementApp/PricingTable";
import Testimonials from "@/components/TaskManagementApp/Testimonials";
import OurLatestBlog from "@/components/TaskManagementApp/OurLatestBlog";
import Newsletter from "@/components/TaskManagementApp/Newsletter";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/TaskManagementApp/Footer";

export default function TaskManagementAppPage() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <KeyFeatures />

      <AppDownload />

      <AppScreens />

      <Footer />
    </>
  );
}
