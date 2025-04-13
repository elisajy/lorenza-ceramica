import {
  Client
} from "instagram-graph-api";
import { useEffect, useState } from "react";
import MainCarousel from "../landing-carousel/MainCarousel";
import LandingInstagram from "../landing-instagram/LandingInstagram";
import LandingPartnersCarousel from "../landing-partners/LandingPartnersCarousel";
import ProductTabs from "../landing-products/ProductTabs";
import LandingProfile from "../landing-profile/LandingProfile";

const Landing = () => {
  let userToken;
  let accessToken;
  const pageId = process.env.REACT_APP_PAGE_ID!;
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/get-tokens`
    ).then((response) => response.json())
      .then((data) => {
        console.log(data);
        userToken = data.find((item: any) => item.name === 'USER_TOKEN');
        accessToken = data.find((item: any) => item.name === 'INSTAGRAM_TOKEN');

        setClient(new Client(accessToken.value, pageId));
      }
      );
  }, []);

  return (
    <>
      <MainCarousel />
      <ProductTabs />
      <LandingProfile />
      <LandingInstagram client={client} />
      <LandingPartnersCarousel />
    </>
  );
};

export default Landing;
