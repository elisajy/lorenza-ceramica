import {
  Divider,
  Grid,
  GridItem,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { homeBanner } from "../../helper/HomeBanner";
import { imageDataStructure } from "../../helper/dataInterface";
import "./LandingProfile.css";
import storyThumbnail from "../../assets/mock-media/landing-story/landing-story-thumbnail.png";

const LandingProfile = () => {
  const [width, setWidth] = useState(window.innerWidth);

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
      <div className="profile-story-block">
        {/* <div className='profile-content'>
                    <div className='image-wrapper'>
                        <img src={storyThumbnail} alt="our-story" />
                    </div>
                    <div className='content-paragraph'>
                        <h1>OUR STORY</h1>
                        <Divider />
                        <p>Lorenza Ceramica believes in the design that you want that's best suitable to your style. The tile design that you choose is a reflection of your comfort & style. It is our pleasure to help you through the creative process & guide you step by step to get your desired version.</p>
                    </div>
                </div> */}

        <Grid
          templateAreas={`"image copy"`}
          gridTemplateRows={width > 640 ? "400" : width <= 640 ? "300" : "300"}
          gridTemplateColumns={"1fr 2fr"}
          h={"auto"}
          gap="1"
        >
          <GridItem pr={15} pl={15} area={"image"} style={{ display: "flex", justifyContent: "center", alignContent: "center"}}>
            <div className="image-wrapper">
              <img src={storyThumbnail} alt="our-story" />
            </div>
          </GridItem>
          <GridItem area={"copy"} style={{ display: "flex", justifyContent: "center", alignContent: "center"}}>
            <div className="content-paragraph">
              <h1 style={{ color: "white" }}>OUR STORY</h1>
              <Divider />
              <p style={{ color: "white" }}>
                Lorenza Ceramica believes in the design that you want that's
                best suitable to your style. The tile design that you choose is
                a reflection of your comfort & style. It is our pleasure to help
                you through the creative process & guide you step by step to get
                your desired version.
              </p>
            </div>
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default LandingProfile;
