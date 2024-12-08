import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { forwardRef, useEffect, useState } from "react";
import "./Layout.css";
import companyLogo from "../../assets/mock-media/lorenza-logo-transparent-white.png";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSubDropdown = () => setSubDropdownOpen(!subDropdownOpen);
  const [innerMenusActive, setInnerMenusActive] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const closeSubMenus = () => {
    setInnerMenusActive(false);
  };
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

  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <footer className="footer">
        {width < 992 && (
          <Grid
            templateAreas={`"logo logo"
                              "company company"
                              "nav nav"`}
            gridTemplateRows={
              width > 640
                ? "80px 70px 1fr"
                : width <= 640
                ? "80px 90px 1fr"
                : "80px 90px 1fr"
            }
            gridTemplateColumns={"1fr 1fr"}
            h={width > 640 ? "300px" : width <= 640 ? "320px" : "320px"}
            gap="1"
          >
            <GridItem pl="2" area={"logo"}>
              <div className="mobile-logo-box">
                <img src={companyLogo} className="footer-logo" />
              </div>
            </GridItem>
            <GridItem pl="2" area={"company"}>
              <div className="mobile-company-info-box">
                <p
                  style={{
                    fontSize: width > 640 ? 14 : width <= 640 ? 12 : 12,
                    wordSpacing: 2,
                  }}
                >
                  W.K CERAMIC DISTRIBUTOR SDN. BHD. (Reg. no.: 199301022836)
                </p>
                <p style={{ fontSize: 12, wordSpacing: 2, }}>
                  Wisma W.K, Lot 5, Jalan 51A/227, 46100 Petaling Jaya, Selangor
                  D.E
                </p>
                <p style={{ fontSize: 12, wordSpacing: 2, }}>
                  Mon - Sat | 08:30 - 18:00
                </p>
              </div>
            </GridItem>
            <GridItem pl="15" pr="15" area={"nav"}>
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
                    <Heading as="h2" fontSize={"18px"} letterSpacing={3} paddingBottom="5px">
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
                      <Button colorScheme="white" variant="link" justifyContent="start">
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
                    <Heading as="h2" fontSize={"18px"} letterSpacing={3} paddingBottom="5px">
                      CONTACT
                    </Heading>
                  </div>
                  <div className="mobile-nav-block">
                    <p
                      style={{
                        fontSize: width > 640 ? 14 : width <= 640 ? 12 : 10,
                      }}
                    >
                      Tel: +60378740112
                    </p>
                    <p
                      style={{
                        fontSize: width > 640 ? 14 : width <= 640 ? 12 : 10,
                      }}
                    >
                      Fax: +60378767553
                    </p>
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
                        openUrl("https://www.facebook.com/wk.lorenza")
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
                        openUrl("https://www.instagram.com/lorenza.ceramica")
                      }
                    />
                  </div>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        )}
        {width >= 992 && (
          <>
            <Flex color="white">
              <Box flex="3" className="footer-box">
                <div>
                  <img src={companyLogo} className="footer-logo" />
                </div>
                <Divider />
                <div className="company-info-block">
                  <p style={{ fontSize: 18, wordSpacing: 8 }}>
                    W.K CERAMIC DISTRIBUTOR SDN. BHD.
                  </p>
                  <p style={{ fontSize: 14, wordSpacing: 6 }}>
                    (Reg. no.: 199301022836)
                  </p>
                  <p style={{ fontSize: 14, wordSpacing: 6 }}>Wisma W.K</p>
                  <p>Lot 5, Jalan 51A/227</p>
                  <p>46100 Petaling Jaya, Selangor D.E</p>
                </div>
                <div className="operating-hour-block">
                  <p style={{ fontSize: 14, wordSpacing: 8 }}>
                    Mon - Sat | 08:30 - 18:00
                  </p>
                </div>
              </Box>
              <Box flex="2" className="footer-box">
                <div className="heading-block">
                  <Heading as="h2" fontSize={"22px"} letterSpacing={3} paddingBottom="5px">
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
                    <Button colorScheme="white" variant="link" justifyContent="start">
                      FAQ
                    </Button>
                  </Link>
                </div>
              </Box>
              <Box flex="2" className="footer-box">
                <div ref={ref} className="heading-block">
                  <Heading as="h2" fontSize={"22px"} letterSpacing={3} paddingBottom="5px">
                    CONTACT
                  </Heading>
                </div>
                <div className="contact-block">
                  <p style={{ fontSize: "14px", letterSpacing: 1 }}>
                    Tel: +60378740112
                  </p>
                  <p style={{ fontSize: "14px", letterSpacing: 1 }}>
                    Fax: +60378767553
                  </p>
                </div>
                <div className="social-block">
                  <IconButton
                    as="a"
                    href="#facebook"
                    aria-label="Facebook"
                    icon={<FaFacebookF />}
                    size="md"
                    variant="outline"
                    onClick={() =>
                      openUrl("https://www.facebook.com/wk.lorenza")
                    }
                  />
                  <IconButton
                    as="a"
                    href="#instagram"
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    size="md"
                    variant="outline"
                    onClick={() =>
                      openUrl("https://www.instagram.com/lorenza.ceramica")
                    }
                  />
                </div>
              </Box>
            </Flex>
          </>
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
