import { useEffect } from "react";
import MainCarousel from "../landing-carousel/MainCarousel";
import ProductTabs from "../landing-products/ProductTabs";
import LandingProfile from "../landing-profile/LandingProfile";
import LandingInstagram from "../landing-instagram/LandingInstagram";
import LandingPartnersCarousel from "../landing-partners/LandingPartnersCarousel";

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
      <LandingPartnersCarousel />
    </>
  );
};

export default Landing;
