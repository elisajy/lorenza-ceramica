import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Stack,
  useDisclosure,
  Text,
  Badge,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productMenu, socialMenu } from "../../helper/HeaderMenu";
import ShoppingCart from "../shopping-cart/ShoppingCart";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import "./Layout.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { useCartContext } from "../../hooks/cart-context/CartContext";
const Header = ({ children }: any) => {
  const start = (
    <img
      alt="logo"
      src="/lorenza-logo-transparent-blue.png"
      height="100"
      className="header-logo"
    ></img>
  );
  const end = (
    <div className="header-icons">
      {/* <Button className='header-button' rounded text severity="info" icon={<FontAwesomeIcon icon={faSquareFacebook} size='2xl'/>} />
      <Button className='header-button' rounded text severity="info" icon={<FontAwesomeIcon icon={faSquareInstagram} size='2xl'/>} />
      <Button className='header-button' rounded text severity="info" icon={<FontAwesomeIcon icon={faCartShopping} size='2xl'/>} /> */}
    </div>
  );

  const [visible, setVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSubDropdown = () => setSubDropdownOpen(!subDropdownOpen);
  const [innerMenusActive, setInnerMenusActive] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const { cartState } = useCartContext();
  const itemCount: number = useMemo(
    () => cartState.products.length,
    [cartState]
  );

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

  const closeSubMenus = () => {
    setInnerMenusActive(false);
  };
  //   useEffect(() => {

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  const navigation = (item: any) => {
    if (!!item.route) {
      navigate(item.route);
    }
  };

  // Temporary solution for ref null error in SubMenu component
  // Navigate with delay to allow components loaded into DOM element
  const navigationDelay = (item: any) => {
    setTimeout(() => {
      if (!!item.route) {
        navigate(item.route);
      }
    }, 200); // Delay of 500 milliseconds (1000ms = 1 second)
  };

  return (
    <>
      <header className="header">
        {width >= 960 && (
          <Flex alignContent={"center"} alignItems={"center"}>
            <Box>
              <img
                className="header-logo"
                src="/lorenza-logo-transparent-blue.png"
                alt="Logo"
              />
            </Box>
            <Spacer />
            <Box>
              <HStack
                as="nav"
                spacing={{ base: 1, sm: 2, md: 3, lg: 4 }}
                display={{ base: "none", md: "flex" }}
                mr={"auto"}
                className="menu-stack"
              >
                <Button variant="ghost" onClick={() => navigate("/")}>
                  <Text
                    fontSize={{
                      base: "sm",
                      sm: "sm",
                      md: "md",
                      lg: "lg",
                      xl: "xl",
                    }}
                  >
                    Home
                  </Text>
                </Button>
                <Button variant="ghost" onClick={() => navigate("/about-us")}>
                  <Text
                    fontSize={{
                      base: "sm",
                      sm: "sm",
                      md: "md",
                      lg: "lg",
                      xl: "xl",
                    }}
                  >
                    About Us
                  </Text>
                </Button>
                <Menu
                  menuButton={
                    <MenuButton style={{ paddingInline: "1rem" }}>
                      <Text
                        fontSize={{
                          base: "sm",
                          sm: "sm",
                          md: "md",
                          lg: "lg",
                          xl: "xl",
                        }}
                        fontWeight={600}
                        letterSpacing={"1px"}
                        color={"#3d4781"}
                      >
                        Products
                      </Text>
                    </MenuButton>
                  }
                  transition
                  align={"center"}
                  viewScroll={"close"}
                >
                  {productMenu &&
                    productMenu.length !== 0 &&
                    productMenu.map((item: any) => {
                      if (item.prds && item.prds.length !== 0) {
                        return (
                          <SubMenu
                            menuStyle={{ textAlign: "center" }}
                            label={
                              <Text
                                fontWeight={600}
                                fontSize={{
                                  base: "sm",
                                  sm: "sm",
                                  md: "md",
                                  lg: "lg",
                                  xl: "xl",
                                }}
                              >
                                {item.label}
                              </Text>
                            }
                          >
                            {item.prds.map((x: any) => {
                              return (
                                <MenuItem
                                  style={{ textAlign: "center" }}
                                  onClick={() => navigationDelay(x)}
                                >
                                  <Text className="button-list-text">
                                    {x.label}
                                  </Text>
                                </MenuItem>
                              );
                            })}
                          </SubMenu>
                        );
                      } else {
                        return (
                          <MenuItem onClick={() => navigation(item)}>
                            {item.label}
                          </MenuItem>
                        );
                      }
                    })}
                </Menu>

                <Button variant="ghost">
                  <Text
                    fontSize={{
                      base: "sm",
                      sm: "sm",
                      md: "md",
                      lg: "lg",
                      xl: "xl",
                    }}
                  >
                    Inspiration
                  </Text>
                </Button>
                <Button variant="ghost">
                  <Text
                    fontSize={{
                      base: "sm",
                      sm: "sm",
                      md: "md",
                      lg: "lg",
                      xl: "xl",
                    }}
                  >
                    Contact
                  </Text>
                </Button>
              </HStack>
            </Box>
            {/* <Spacer /> */}
            <Box>
              <HStack spacing={2} display={{ base: "none", md: "flex" }}>
                {socialMenu && socialMenu.length !== 0
                  ? socialMenu.map((item: any) => {
                      return (
                        <>
                          <IconButton
                            as="a"
                            href={item.href}
                            aria-label={item.ariaLabel}
                            icon={item.icon}
                            size={item.size}
                            variant="ghost"
                            fontSize={item.fontSize}
                            onClick={
                              item.ariaLabel === "ShoppingCart"
                                ? () => setVisible(!visible)
                                : () => openUrl(item.url)
                            }
                          />
                          {item.ariaLabel === "ShoppingCart" ? (
                            <Badge
                              colorScheme="red"
                              borderRadius="full"
                              px="2"
                              position="relative"
                              top="-15px"
                              left="-25px"
                            >
                              {itemCount}
                            </Badge>
                          ) : null}
                        </>
                      );
                    })
                  : null}
              </HStack>
            </Box>
          </Flex>
        )}

        {width < 960 && width > 576 && (
          <>
            <Flex alignContent={"center"} alignItems={"center"}>
              <Box width={130}>
                <IconButton
                  size={"lg"}
                  fontSize={"xl"}
                  aria-label="Menu"
                  icon={<HamburgerIcon />}
                />
              </Box>
              <Spacer />
              <Box>
                <img
                  className="header-logo"
                  src="/lorenza-logo-transparent-blue.png"
                  alt="Logo"
                />
              </Box>
              <Spacer />
              <Box>
                <Stack spacing={1} display={{ md: "flex" }} direction={"row"}>
                  {socialMenu && socialMenu.length !== 0
                    ? socialMenu.map((item: any) => {
                        return (
                          <>
                            <IconButton
                              as="a"
                              href={item.href}
                              aria-label={item.ariaLabel}
                              icon={item.icon}
                              size={"md"}
                              variant="ghost"
                              fontSize={"xl"}
                              onClick={
                                item.ariaLabel === "ShoppingCart"
                                  ? () => setVisible(!visible)
                                  : () => openUrl(item.url)
                              }
                            />
                            {item.ariaLabel === "ShoppingCart" ? (
                              <Badge
                                colorScheme="red"
                                borderRadius="full"
                                px="2"
                                position="relative"
                                top="-15px"
                                left="-25px"
                              >
                                {itemCount}
                              </Badge>
                            ) : null}
                          </>
                        );
                      })
                    : null}
                </Stack>
              </Box>
            </Flex>
          </>
        )}

        {width <= 576 && (
          <>
            <Flex alignContent={"center"} alignItems={"center"}>
              <Box width={130}>
                <IconButton
                  size={"lg"}
                  fontSize={"xl"}
                  aria-label="Menu"
                  icon={<HamburgerIcon />}
                />
              </Box>
              <Spacer width={100} />
              <Box>
                <img
                  className="header-logo"
                  src="/lorenza-logo-transparent-blue.png"
                  alt="Logo"
                />
              </Box>
              <Spacer width={100} />
              <Box minWidth={130}>
                <Stack spacing={1} display={"flex"} float={"right"}>
                  {socialMenu && socialMenu.length !== 0
                    ? socialMenu.map((item: any) => {
                        return (
                          <>
                            {width <= 576 ? (
                              <>
                                {item.ariaLabel === "ShoppingCart" && (
                                  <>
                                    <IconButton
                                      as="a"
                                      href={item.href}
                                      aria-label={item.ariaLabel}
                                      icon={item.icon}
                                      size={"sm"}
                                      variant="ghost"
                                      fontSize={"md"}
                                      onClick={
                                        item.ariaLabel === "ShoppingCart"
                                          ? () => setVisible(!visible)
                                          : () => openUrl(item.url)
                                      }
                                    />
                                    {item.ariaLabel === "ShoppingCart" ? (
                                      <Badge
                                        colorScheme="red"
                                        borderRadius="full"
                                        px="2"
                                        position="relative"
                                        top="-30px"
                                        left="-25px"
                                      >
                                        {itemCount}
                                      </Badge>
                                    ) : null}
                                  </>
                                )}
                              </>
                            ) : (
                              <>
                                <IconButton
                                  as="a"
                                  href={item.href}
                                  aria-label={item.ariaLabel}
                                  icon={item.icon}
                                  size={"sm"}
                                  variant="ghost"
                                  fontSize={"md"}
                                  onClick={
                                    item.ariaLabel === "ShoppingCart"
                                      ? () => setVisible(!visible)
                                      : () => openUrl(item.url)
                                  }
                                />
                                {item.ariaLabel === "ShoppingCart" ? (
                                  <Badge
                                    colorScheme="red"
                                    borderRadius="full"
                                    px="2"
                                    position="relative"
                                    top="-15px"
                                    left="-25px"
                                  >
                                    {itemCount}
                                  </Badge>
                                ) : null}
                              </>
                            )}
                          </>
                        );
                      })
                    : null}
                </Stack>
              </Box>
            </Flex>
          </>
        )}
      </header>

      {/* <ShoppingCart visible={visible} setVisible={setVisible} /> */}
    </>
  );
};

export default Header;
