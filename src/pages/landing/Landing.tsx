import MainCarousel from "../landing-carousel/MainCarousel";
import ProductTabs from "../landing-products/ProductTabs";
import { EmblaOptionsType } from "embla-carousel";
import LandingProfile from "../landing-profile/LandingProfile";
import LandingPartners from "../landing-partners/LandingPartners";
import { useEffect, useState } from "react";
import LandingInstagram from "../landing-instagram/LandingInstagram";
import { Grid } from "@chakra-ui/react";

const Landing = () => {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Handler to update the state with the new window width
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Call the handler immediately to set initial width
    handleResize();

    // Cleanup by removing the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
      <MainCarousel slides={SLIDES} />
      <ProductTabs />
      <LandingProfile />
      <LandingInstagram />
      <LandingPartners slides={SLIDES} />
    </>
  );
};

export default Landing;
