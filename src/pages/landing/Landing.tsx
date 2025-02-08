import MainCarousel from "../landing-carousel/MainCarousel";
import ProductTabs from "../landing-products/ProductTabs";
import LandingProfile from "../landing-profile/LandingProfile";
import LandingPartners from "../landing-partners/LandingPartners";
import { useEffect } from "react";
import LandingInstagram from "../landing-instagram/LandingInstagram";

const Landing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <MainCarousel />
      <ProductTabs />
      <LandingProfile />
      <LandingInstagram />
      <LandingPartners />
    </>
  );
};

export default Landing;
