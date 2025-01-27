import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { forwardRef, useEffect, useState } from "react";
import "./Layout.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
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

  const openUrl = (key: string) => {
    const url = companyInfo.find((x: any) => x.key === key)?.value ?? '';
    window.open(url, "_blank");
  };

  const formatAddress = () => {
    const fullAdd = companyInfo.find((x: any) => x.key === 'ADDRESS')?.value;
    return fullAdd?.replaceAll(';', ', ');
  }

  const formatAddressMobile = () => {
    const fullAdd = companyInfo.find((x: any) => x.key === 'ADDRESS')?.value;
    const adds = fullAdd?.split(';');
    return (adds &&
      <>
        {adds.map((x: string) => {
          return (<p>{x}</p>)
        })}
      </>
    )
  }

  return (
    <>
      <footer className="footer">
        {width < 992 && (
          <Grid
            templateAreas={`"company company" "nav nav"`}
            gridTemplateRows={
              width > 640 ? "70px 1fr" : width <= 640 ? "90px 1fr" : "90px 1fr"
            }
            gridTemplateColumns={"1fr 1fr"}
            gap="1"
          >
            {/* <GridItem pl="2" area={"logo"}>
              <div className="mobile-logo-box">
                <img src={companyLogo} className="footer-logo" />
              </div>
            </GridItem> */}
            <GridItem pl="2" pt="1" area={"company"}>
              <div className="mobile-company-info-box">
                <p
                  style={{
                    fontSize: width > 640 ? 14 : width <= 640 ? 12 : 12,
                    wordSpacing: 2,
                  }}
                >
                  {companyInfo.find((x: any) => x.key === 'COMPANY_NAME')?.value} {companyInfo.find((x: any) => x.key === 'COMPANY_REGISTRATION_NUMBER')?.value}
                </p>
                <p style={{ fontSize: 12, wordSpacing: 2 }}>
                  {formatAddress()}
                </p>
                <p style={{ fontSize: 12, wordSpacing: 2 }}>
                  {companyInfo.find((x: any) => x.key === 'OPERATING_HOURS')?.value}
                </p>
              </div>
            </GridItem>
            <GridItem style={{ padding: "0 15px 50px 15px" }} area={"nav"}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Box
                  style={{
                    paddingRight: width > 640 ? 50 : width <= 640 ? 30 : 20,
                  }}
                >
                  <div className="mobile-heading-block">
                    <Heading
                      as="h2"
                      fontSize={"18px"}
                      letterSpacing={3}
                      paddingBottom="5px"
                    >
                      INFORMATION
                    </Heading>
                  </div>
                  <div className="mobile-nav-block">
                    <Link to="/">
                      <Button colorScheme="white" variant="link">
                        Main Page
                      </Button>
                    </Link>
                    <Link to="/about-us">
                      <Button colorScheme="white" variant="link">
                        About Us
                      </Button>
                    </Link>
                    <Link to="/products/tiles/porcelain">
                      <Button colorScheme="white" variant="link">
                        Products
                      </Button>
                    </Link>
                    <Link to="/inspirations">
                      <Button colorScheme="white" variant="link">
                        Inspiration
                      </Button>
                    </Link>
                    <Link to="/faq">
                      <Button
                        colorScheme="white"
                        variant="link"
                        justifyContent="start"
                      >
                        FAQ
                      </Button>
                    </Link>
                  </div>
                </Box>
                <Box
                  style={{
                    paddingLeft: width > 640 ? 50 : width <= 640 ? 30 : 20,
                  }}
                >
                  <div ref={ref} className="mobile-heading-block">
                    <Heading
                      as="h2"
                      fontSize={"18px"}
                      letterSpacing={3}
                      paddingBottom="5px"
                    >
                      CONTACT
                    </Heading>
                  </div>
                  <div className="mobile-nav-block">
                    <div dangerouslySetInnerHTML={{ __html: companyInfo.find((x: any) => x.key === 'CONTACT_MOBILE')?.value }}></div>
                  </div>
                  <div className="mobile-social-block">
                    <IconButton
                      as="a"
                      href="#facebook"
                      aria-label="Facebook"
                      icon={<FaFacebookF />}
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        openUrl("FACEBOOK")
                      }
                    />
                    <IconButton
                      as="a"
                      href="#instagram"
                      aria-label="Instagram"
                      icon={<FaInstagram />}
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        openUrl("INSTAGRAM")
                      }
                    />
                  </div>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        )}
        {width >= 992 && (
          <Box display="flex" color="white">
            <Box flex="1" className="footer-box">
              {/* <div>
                  <img src={companyLogo} className="footer-logo" />
                </div> */}
              <div className="company-info-block">
                <p style={{ fontSize: 18, wordSpacing: 8 }}>
                  {companyInfo.find((x: any) => x.key === 'COMPANY_NAME')?.value}
                </p>
                <p style={{ fontSize: 14, wordSpacing: 6 }}>
                  {companyInfo.find((x: any) => x.key === 'COMPANY_REGISTRATION_NUMBER')?.value}
                </p>
                {formatAddressMobile()}
              </div>
              <div className="operating-hour-block">
                <p style={{ fontSize: 14, wordSpacing: 8 }}>
                  {companyInfo.find((x: any) => x.key === 'OPERATING_HOURS')?.value}
                </p>
              </div>
            </Box>
            <Box flex="1" className="footer-box">
              <div className="heading-block">
                <Heading
                  as="h2"
                  fontSize={"22px"}
                  letterSpacing={3}
                  paddingBottom="5px"
                >
                  INFORMATION
                </Heading>
              </div>
              <div className="nav-block">
                <Link to="/">
                  <Button colorScheme="white" variant="link">
                    Main Page
                  </Button>
                </Link>
                <Link to="/about-us">
                  <Button colorScheme="white" variant="link">
                    About Us
                  </Button>
                </Link>
                <Link to="/products/tiles/porcelain">
                  <Button colorScheme="white" variant="link">
                    Products
                  </Button>
                </Link>
                <Link to="/inspirations">
                  <Button colorScheme="white" variant="link">
                    Inspiration
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button
                    colorScheme="white"
                    variant="link"
                    justifyContent="start"
                  >
                    FAQ
                  </Button>
                </Link>
              </div>
            </Box>
            <Box flex="1" className="footer-box">
              <div ref={ref} className="heading-block">
                <Heading
                  as="h2"
                  fontSize={"22px"}
                  letterSpacing={3}
                  paddingBottom="5px"
                >
                  CONTACT
                </Heading>
              </div>
              <div className="contact-block">
                <div dangerouslySetInnerHTML={{ __html: companyInfo.find((x: any) => x.key === 'CONTACT_DESKTOP')?.value }}></div>
              </div>
              <div className="social-block">
                <IconButton
                  as="a"
                  href="#facebook"
                  aria-label="Facebook"
                  icon={<FaFacebookF />}
                  size="md"
                  variant="outline"
                  onClick={() => openUrl("FACEBOOK")}
                />
                <IconButton
                  as="a"
                  href="#instagram"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  size="md"
                  variant="outline"
                  onClick={() =>
                    openUrl("INSTAGRAM")
                  }
                />
              </div>
            </Box>
          </Box>
        )}
        {width >= 992 && (
          <>
            <Box style={{ float: "right", fontSize: 12 }}>
              <p>© 2024 Lorenza Ceramica. All rights reserved.</p>
            </Box>
          </>
        )}
        {width < 992 && (
          <>
            <Box style={{ textAlign: "center", fontSize: 12 }}>
              <p>© 2024 Lorenza Ceramica. All rights reserved.</p>
            </Box>
          </>
        )}
      </footer>
    </>
  );
});

export default Footer;
