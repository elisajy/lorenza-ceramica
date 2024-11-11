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
  DrawerCloseButton,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { productMenu, socialMenu } from "../../helper/HeaderMenu";
import ShoppingCart from "../shopping-cart/ShoppingCart";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import "./Layout.css";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { useCartContext } from "../../hooks/cart-context/CartContext";
import CartIcon from "../../components/cart-icon/CartIcon";

const Header = ({ children, onScrollToFooter }: any) => {
  const [visible, setVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<any>([]);
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

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/productsSideNavs`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const menuNavigation = (route: any) => {
    setTimeout(() => {
      if (!!route) {
        navigate(route);
        onClose();
      }
    }, 200);
  };

  return (
    <>
      <header className="header">
        {width >= 992 && (
          <Flex alignContent={"center"} alignItems={"center"}>
            <Box onClick={() => {navigate("/")}}>
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
                  {categories &&
                    categories.length !== 0 &&
                    categories.map((item: any) => {
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
                                  xl: "lg",
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
                             <Text
                                fontWeight={600}
                                fontSize={{
                                  base: "sm",
                                  sm: "sm",
                                  md: "md",
                                  lg: "lg",
                                  xl: "lg",
                                }}
                              >
                                {item.label}
                              </Text>
                          </MenuItem>
                        );
                      }
                    })}
                </Menu>

                <Button
                  variant="ghost"
                  onClick={() => navigate("/inspirations")}
                >
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
                <Button variant="ghost" onClick={onScrollToFooter}>
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
                          {item.ariaLabel === "ShoppingCart" ? (
                            <CartIcon
                              visible={visible}
                              setVisible={setVisible}
                              count={itemCount}
                            />
                          ) : (
                            <IconButton
                              as="a"
                              href={item.href}
                              aria-label={item.ariaLabel}
                              icon={item.icon}
                              size={item.size}
                              variant="ghost"
                              fontSize={item.fontSize}
                              onClick={() => openUrl(item.url)}
                            />
                          )}
                        </>
                      );
                    })
                  : null}
              </HStack>
            </Box>
          </Flex>
        )}

        {width < 992 && width > 576 && (
          <>
            <Grid
              templateAreas={`"header1 header2 header3"`}
              gridTemplateRows={"90px"}
              gridTemplateColumns={"1fr 1fr 1fr"}
              h={"100px"}
              gap="1"
            >
              <GridItem
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
                area={"header1"}
              >
                <Box>
                  <IconButton
                    onClick={onOpen}
                    size={"lg"}
                    fontSize={"xl"}
                    aria-label="Menu"
                    icon={<HamburgerIcon />}
                  />
                </Box>
              </GridItem>
              <GridItem
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                area={"header2"}
              >
                <Box onClick={() => {navigate("/")}}>
                  <img
                    className="header-logo"
                    src="/lorenza-logo-transparent-blue.png"
                    alt="Logo"
                  />
                </Box>
              </GridItem>
              <GridItem
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
                area={"header3"}
              >
                <Box>
                  <Stack spacing={1} display={{ md: "flex" }} direction={"row"}>
                    {socialMenu && socialMenu.length !== 0
                      ? socialMenu.map((item: any) => {
                          return (
                            <>
                              {item.ariaLabel === "ShoppingCart" ? (
                                <CartIcon
                                  visible={visible}
                                  setVisible={setVisible}
                                  count={itemCount}
                                />
                              ) : (
                                <IconButton
                                  as="a"
                                  href={item.href}
                                  aria-label={item.ariaLabel}
                                  icon={item.icon}
                                  size={item.size}
                                  variant="ghost"
                                  fontSize={item.fontSize}
                                  onClick={() => openUrl(item.url)}
                                />
                              )}
                            </>
                          );
                        })
                      : null}
                  </Stack>
                </Box>
              </GridItem>
            </Grid>
          </>
        )}

        {width <= 576 && (
          <>
            <Grid
              templateAreas={`"header1 header2 header3"`}
              gridTemplateRows={"90px"}
              gridTemplateColumns={"1fr 1fr 1fr"}
              h={"100px"}
              gap="1"
            >
              <GridItem
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
                area={"header1"}
              >
                <Box>
                  <IconButton
                    onClick={onOpen}
                    size={"lg"}
                    fontSize={"xl"}
                    aria-label="Menu"
                    icon={<HamburgerIcon />}
                  />
                </Box>
              </GridItem>
              <GridItem
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                area={"header2"}
              >
                <Box onClick={() => {navigate("/")}}>
                  <img
                    className="header-logo"
                    src="/lorenza-logo-transparent-blue.png"
                    alt="Logo"
                  />
                </Box>
              </GridItem>
              <GridItem
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
                area={"header3"}
              >
                <Box>
                  <Stack spacing={1} display={"flex"} float={"right"}>
                    {socialMenu && socialMenu.length !== 0
                      ? socialMenu.map((item: any) => {
                          return (
                            <>
                              {width <= 576 ? (
                                <>
                                  {item.ariaLabel === "ShoppingCart" && (
                                    <>
                                      {item.ariaLabel === "ShoppingCart" ? (
                                        <CartIcon
                                          visible={visible}
                                          setVisible={setVisible}
                                          count={itemCount}
                                        />
                                      ) : (
                                        <IconButton
                                          as="a"
                                          href={item.href}
                                          aria-label={item.ariaLabel}
                                          icon={item.icon}
                                          size={item.size}
                                          variant="ghost"
                                          fontSize={item.fontSize}
                                          onClick={() => openUrl(item.url)}
                                        />
                                      )}
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  {item.ariaLabel === "ShoppingCart" ? (
                                    <CartIcon
                                      visible={visible}
                                      setVisible={setVisible}
                                      count={itemCount}
                                    />
                                  ) : (
                                    <IconButton
                                      as="a"
                                      href={item.href}
                                      aria-label={item.ariaLabel}
                                      icon={item.icon}
                                      size={item.size}
                                      variant="ghost"
                                      fontSize={item.fontSize}
                                      onClick={() => openUrl(item.url)}
                                    />
                                  )}
                                </>
                              )}
                            </>
                          );
                        })
                      : null}
                  </Stack>
                </Box>
              </GridItem>
            </Grid>
          </>
        )}

        {isOpen && <Drawer
          placement={"top"}
          onClose={onClose}
          isOpen={isOpen}
          size={"full"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody style={{ padding: "3rem" }}>
              <Box>
                <VStack
                  as="nav"
                  spacing={{ base: 1, sm: 2, md: 3, lg: 4 }}
                  mr={"auto"}
                  className="menu-stack"
                  align="stretch"
                >
                  <Button
                    className="mobile-menu-button"
                    variant="ghost"
                    onClick={() => menuNavigation("/")}
                  >
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
                  <Button
                    className="mobile-menu-button"
                    variant="ghost"
                    onClick={() => menuNavigation("/about-us")}
                  >
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
                  <Accordion allowToggle>
                    <AccordionItem>
                      <AccordionButton>
                        <Box
                          className="mobile-menu-title"
                          as="button"
                          flex={1}
                          textAlign={"left"}
                          fontSize={{
                            base: "sm",
                            sm: "sm",
                            md: "md",
                            lg: "lg",
                            xl: "xl",
                          }}
                        >
                          Products
                          <AccordionIcon />
                        </Box>
                      </AccordionButton>
                      <AccordionPanel>
                        <Box>
                          <Accordion allowToggle>
                            {categories && categories.length !== 0
                              ? categories.map((item: any) => {
                                  return (
                                    <AccordionItem>
                                      <AccordionButton>
                                        <Box
                                          as="span"
                                          flex="1"
                                          textAlign="left"
                                        >
                                          {item.prds &&
                                          item.prds.length === 0 ? (
                                            <NavLink
                                              onClick={() => {
                                                onClose();
                                              }}
                                              to={item.route}
                                              style={({
                                                isActive,
                                                isPending,
                                                isTransitioning,
                                              }) => {
                                                return {
                                                  fontWeight: isActive
                                                    ? "bold"
                                                    : "",
                                                  color: isPending
                                                    ? "red"
                                                    : "black",
                                                  viewTransitionName:
                                                    isTransitioning
                                                      ? "slide"
                                                      : "",
                                                };
                                              }}
                                            >
                                              <Text
                                                fontSize={"md"}
                                                fontWeight={600}
                                                color={"#0c478a"}
                                              >
                                                {item.label}
                                              </Text>
                                            </NavLink>
                                          ) : (
                                            <Text
                                              fontSize={"md"}
                                              fontWeight={600}
                                              color={"#0c478a"}
                                            >
                                              {item.label}
                                            </Text>
                                          )}
                                        </Box>
                                        {item.prds && item.prds.length !== 0 ? (
                                          <AccordionIcon />
                                        ) : null}
                                      </AccordionButton>
                                      <AccordionPanel>
                                        {item.prds && item.prds.length !== 0
                                          ? item.prds.map((x: any) => {
                                              return (
                                                <div>
                                                  <NavLink
                                                    onClick={() => {
                                                      onClose();
                                                    }}
                                                    to={x.route}
                                                    style={({
                                                      isActive,
                                                      isPending,
                                                      isTransitioning,
                                                    }) => {
                                                      return {
                                                        fontWeight: isActive
                                                          ? "bold"
                                                          : "",
                                                        color: isPending
                                                          ? "red"
                                                          : "black",
                                                        viewTransitionName:
                                                          isTransitioning
                                                            ? "slide"
                                                            : "",
                                                      };
                                                    }}
                                                  >
                                                    <Text
                                                      fontSize={"sm"}
                                                      color={"#143e6e"}
                                                    >
                                                      {x.label}
                                                    </Text>
                                                  </NavLink>
                                                </div>
                                              );
                                            })
                                          : null}
                                      </AccordionPanel>
                                    </AccordionItem>
                                  );
                                })
                              : null}
                          </Accordion>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <Button
                    className="mobile-menu-button"
                    variant="ghost"
                    onClick={() => menuNavigation("/inspirations")}
                  >
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
                  <Button
                    className="mobile-menu-button"
                    variant="ghost"
                    onClick={() => {
                      onClose();
                      onScrollToFooter();
                    }}
                  >
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
                </VStack>
              </Box>
              {width <= 576 && (
                <Box>
                  <HStack spacing={1} float={"left"}>
                    {socialMenu && socialMenu.length !== 0
                      ? socialMenu.map((item: any) => {
                          return (
                            <>
                              {item.ariaLabel !== "ShoppingCart" && (
                                <>
                                  <IconButton
                                    as="a"
                                    href={item.href}
                                    aria-label={item.ariaLabel}
                                    icon={item.icon}
                                    size={"lg"}
                                    variant="ghost"
                                    fontSize={"x-large"}
                                    onClick={() => openUrl(item.url)}
                                  />
                                </>
                              )}
                            </>
                          );
                        })
                      : null}
                  </HStack>
                </Box>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>}
      </header>

      <ShoppingCart visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Header;
