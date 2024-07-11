import React from "react";
import Navbar from "./global-components/navbar-v3";
import Banner from "./section-components/banner-v3";
import Features from "./section-components/features-v1";
import ProductSlider from "./section-components/product-slider-v3";
// import FeaturedItem from "./section-components/featured-item-v1";
import Testimonial from "./section-components/testimonial-v3";
import Footer from "./global-components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
      <ProductSlider />
      {/* <FeaturedItem /> */}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
