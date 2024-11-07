import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Spacer,
    useDisclosure,
    Text,
    Badge
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productMenu, socialMenu } from "../../helper/HeaderMenu";
import ShoppingCart from "../shopping-cart/ShoppingCart";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import "./Layout.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
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
    const [categories, setCategories] = useState<any>([]);
    const navigate = useNavigate();
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleSubDropdown = () => setSubDropdownOpen(!subDropdownOpen);
    const [innerMenusActive, setInnerMenusActive] = useState(true);
    const { cartState } = useCartContext();
    const itemCount: number = useMemo(() => cartState.products.length, [cartState]);

    const closeSubMenus = () => {
        setInnerMenusActive(false);
    };
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/productsSideNavs`)
            .then((response) => response.json())
            .then((data) => setCategories(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openUrl = (url: string) => {
        window.open(url, "_blank");
    }

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
                <Box px={8}>
                    <Flex h={16} alignItems="center">
                        {/* Logo on the left */}
                        <Box>
                            <img
                                src="/lorenza-logo-transparent-blue.png"
                                alt="Logo"
                                style={{ height: "100px" }}
                            />
                        </Box>

                        {/* Spacer pushes content to the right */}
                        <Spacer />

                        {/* Navigation Menu and Social Icons */}
                        <Flex alignItems="center">
                            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }} mr={5} className="menu-stack">
                                <Button variant="ghost" onClick={() => navigate('/')}>
                                    <Text fontSize={"xl"}>Home</Text>
                                </Button>
                                <Button variant="ghost" onClick={() => navigate('/about-us')}>
                                    <Text fontSize={"xl"}>About Us</Text>
                                </Button>
                                <Menu menuButton={<MenuButton style={{ paddingInline: '1rem' }}>
                                    <Text fontSize={"xl"} fontWeight={600} letterSpacing={'1px'} color={'#3d4781'}>Products</Text>
                                </MenuButton>}
                                    transition
                                    align={'center'}
                                    viewScroll={'close'}
                                >
                                    {
                                        categories && categories.length !== 0 &&
                                        categories.map((item: any) => {
                                            if (item.prds && item.prds.length !== 0) {
                                                return (
                                                    <SubMenu menuStyle={{ textAlign: 'center' }} label={<Text fontWeight={600} fontSize={'lg'}>{item.label}</Text>}>
                                                        {
                                                            item.prds.map((x: any) => {
                                                                return <MenuItem style={{ textAlign: 'center' }} onClick={() => navigationDelay(x)}><Text>{x.label}</Text></MenuItem>
                                                            })
                                                        }
                                                    </SubMenu>
                                                )
                                            } else {
                                                return <MenuItem onClick={() => navigation(item)}>{item.label}</MenuItem>
                                            }
                                        })
                                    }
                                </Menu>

                                <Button variant="ghost">
                                    <Text fontSize={"xl"}>Inspiration</Text>
                                </Button>
                                <Button variant="ghost">
                                    <Text fontSize={"xl"}>Contact</Text>
                                </Button>
                            </HStack>
                            {/* <HStack
                                as="nav"
                                spacing={4}
                                display={{ base: "none", md: "flex" }}
                                mr={6}
                                className="menu-stack"
                            >
                                <Button fontSize={"xl"} variant="ghost">
                                    Home
                                </Button>
                                <Button fontSize={"xl"} variant="ghost">
                                    About Us
                                </Button>

                                <Menu>
                                    <MenuButton fontSize={"xl"} as={Button}>
                                        Products
                                    </MenuButton>
                                    <MenuList>
                                        <Menu orientation="horizontal">
                                            {categories && categories.length !== 0
                                                ? categories.map((item: any) => {
                                                    if (item.id === 99) {
                                                        return (
                                                            <>
                                                                <MenuButton
                                                                    as={Button}
                                                                    w="100%"
                                                                    textAlign={"left"}
                                                                >
                                                                    {item.label}
                                                                </MenuButton>
                                                                <MenuList>
                                                                    <Stack as="nav" spacing={4}>
                                                                        {item.prds && item.prds.length !== 0
                                                                            ? item.prds.map((it: any) => {
                                                                                return (
                                                                                    <>
                                                                                        <Link to={it.route}>
                                                                                            <MenuItem>{it.label}</MenuItem>
                                                                                        </Link>
                                                                                    </>
                                                                                );
                                                                            })
                                                                            : null}
                                                                    </Stack>
                                                                </MenuList>
                                                            </>
                                                        );
                                                    }
                                                })
                                                : null}
                                        </Menu>
                                        {categories && categories.length !== 0
                                            ? categories.map((item: any) => {
                                                if (item.id !== 99) {
                                                    return (
                                                        <MenuItem fontWeight={600}>{item.label}</MenuItem>
                                                    );
                                                }
                                            })
                                            : null}
                                    </MenuList>
                                </Menu>
                                <Button fontSize={"xl"} variant="ghost">
                                    Inspiration
                                </Button>
                                <Button fontSize={"xl"} variant="ghost">
                                    Contact
                                </Button>
                            </HStack> */}

                            {/* Social Icons on the far right */}
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
                                                {(item.ariaLabel === "ShoppingCart")
                                                    ? <Badge colorScheme="red" borderRadius="full" px="2" position="relative" top="-15px" left="-25px">
                                                        {itemCount}
                                                    </Badge>
                                                    : null
                                                }
                                            </>
                                        );
                                    })
                                    : null}
                            </HStack>

                            {/* Hamburger Icon for mobile (on the right side) */}
                            <IconButton
                                size="md"
                                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                                aria-label="Open Menu"
                                display={{ md: "none" }}
                                onClick={isOpen ? onClose : onOpen}
                            />
                        </Flex>
                    </Flex>

                    {/* Mobile Menu */}
                    {/* {isOpen ? (
                        <Box pb={4} display={{ md: "none" }}>
                            <Stack as="nav" spacing={4}>
                                <Button w="100%">Home</Button>
                                <Button w="100%">About</Button>
                                <Menu>
                                    <MenuButton as={Button}>Services</MenuButton>
                                    <MenuList>
                                        <MenuItem>Service 1</MenuItem>
                                        <MenuItem>Service 2</MenuItem>
                                        <MenuDivider />
                                        <Menu>
                                            <MenuButton as={Button} w="100%">
                                                More Services
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem>Sub-Service 1</MenuItem>
                                                <MenuItem>Sub-Service 2</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </MenuList>
                                </Menu>
                                <Button w="100%">Contact</Button>
                            </Stack>

                            <HStack spacing={4} justify="center" mt={4}>
                                {socialMenu && socialMenu.length !== 0
                                    ? socialMenu.map((item: any) => {
                                        return (
                                            <IconButton
                                                as="a"
                                                href={item.href}
                                                aria-label={item.ariaLabel}
                                                icon={item.icon}
                                                size={item.size}
                                                variant={item.variant}
                                                onClick={
                                                    item.ariaLabel === "ShoppingCart"
                                                        ? () => setVisible(!visible)
                                                        : () => openUrl(item.url)
                                                }
                                            />
                                        );
                                    })
                                    : null}
                            </HStack>
                        </Box>
                    ) : null} */}
                </Box>
            </header>

            <ShoppingCart visible={visible} setVisible={setVisible} />
        </>
    );
};

export default Header;
