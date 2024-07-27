import Navbar from "@/components/InnerPageLayout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import BlogPost from "@/components/Blog/BlogPost";
import Footer from "@/components/InnerPageLayout/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <PageBannerTitle
        title="Blog"
        homeText="Home"
        homeUrl="/"
      />

      <BlogPost />

      <Footer />
    </>
  );
}
