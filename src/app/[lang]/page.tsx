import Navbar from "@/components/TaskManagementApp/Navbar";
import HeroBanner from "@/components/TaskManagementApp/HeroBanner";
import KeyFeatures from "@/components/TaskManagementApp/KeyFeatures";
import AppDownload from "@/components/TaskManagementApp/AppDownload";
import AppScreens from "@/components/TaskManagementApp/AppScreens";
import Footer from "@/components/TaskManagementApp/Footer";
import ContactForm from "@/components/Contact/ContactForm";

export default function TaskManagementAppPage() {
  return (
    <>
      <Navbar />

      <HeroBanner />

      <KeyFeatures />

      <AppDownload />

      <AppScreens />

      <ContactForm />

      <Footer />
    </>
  );
}
