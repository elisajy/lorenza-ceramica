import {
  Divider,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./LandingProfile.css";

const LandingProfile = () => {
  const [companyInfo, setCompanyInfo] = useState<any>([]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/company-info`)
      .then((response) => response.json())
      .then((data) => setCompanyInfo(data));

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
        <Grid
          templateAreas={
            width > 640 ? `"image copy"` : width <= 640 ? `"copy"` : `"copy"`
          }
          gridTemplateRows={width > 640 ? "400" : width <= 640 ? "320" : "320"}
          gridTemplateColumns={
            width > 640 ? "1fr 2fr" : width <= 640 ? "1fr" : "1fr"
          }
          h={"auto"}
          gap="1"
        >
          {width > 640 && (
            <GridItem
              pr={15}
              pl={15}
              area={"image"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <div className="image-wrapper">
                <img src={companyInfo.find((x: any) => x.key === 'OUR_STORY_IMG')?.value} alt="our-story" />
              </div>
            </GridItem>
          )}
          <GridItem
            area={"copy"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div className="content-paragraph">
              <h1 style={{ color: "white" }}>OUR STORY</h1>
              <Divider />
              <p style={{ color: "white" }}>
                {companyInfo.find((x: any) => x.key === 'OUR_STORY_TEXT')?.value}
              </p>
            </div>
          </GridItem>
        </Grid>
      </div>
    </>
  );
};

export default LandingProfile;
