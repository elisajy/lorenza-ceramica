import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Spacer,
    Stack,
    useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaShoppingCart } from "react-icons/fa";
import "./Layout.css";
import { productMenu, socialMenu } from "../../helper/HeaderMenu";
const Header = ({ children }: any) => {
    const start = <img alt="logo" src="/lorenza-logo-transparent-blue.png" height="100" className="header-logo"></img>;
    const end = (
        <div className='header-icons'>
            {/* <Button className='header-button' rounded text severity="info" icon={<FontAwesomeIcon icon={faSquareFacebook} size='2xl'/>} />
      <Button className='header-button' rounded text severity="info" icon={<FontAwesomeIcon icon={faSquareInstagram} size='2xl'/>} />
      <Button className='header-button' rounded text severity="info" icon={<FontAwesomeIcon icon={faCartShopping} size='2xl'/>} /> */}
        </div>
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [subDropdownOpen, setSubDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const toggleSubDropdown = () => setSubDropdownOpen(!subDropdownOpen);
    const [innerMenusActive, setInnerMenusActive] = useState(true);

    const closeSubMenus = () => {
        setInnerMenusActive(false);
    };
    //   useEffect(() => {

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, []);


    return (
        <>
            <header className="header">
                <Box px={8}>
                    <Flex h={16} alignItems="center">
                        {/* Logo on the left */}
                        <Box>
                            <img src="/lorenza-logo-transparent-blue.png" alt="Logo" style={{ height: '100px' }} />
                        </Box>

                        {/* Spacer pushes content to the right */}
                        <Spacer />

                        {/* Navigation Menu and Social Icons */}
                        <Flex alignItems="center">
                            <HStack
                                as="nav"
                                spacing={4}
                                display={{ base: "none", md: "flex" }}
                                mr={6} /* Margin Right */
                                className="menu-stack"
                            >
                                <Button fontSize={"xl"} variant="ghost">Home</Button>
                                <Button fontSize={"xl"} variant="ghost">About Us</Button>

                                <Menu>
                                    <MenuButton fontSize={"xl"} as={Button}>
                                        Products
                                    </MenuButton>
                                    <MenuList>

                                        <Menu orientation="horizontal">
                                            {
                                                productMenu && productMenu.length !== 0 ?
                                                    productMenu.map((item: any) => {
                                                        if (item.id === 99) {
                                                            return <>
                                                                <MenuButton as={Button} w="100%" textAlign={"left"}>
                                                                    {item.label}
                                                                </MenuButton>
                                                                <MenuList>
                                                                    <Stack as="nav" spacing={4}>
                                                                        {
                                                                            (item.prds) && (item.prds).length !== 0 ?
                                                                                (item.prds).map((it: any) => {
                                                                                    return <>
                                                                                        <MenuItem>{it.label}</MenuItem>
                                                                                    </>
                                                                                })
                                                                                :
                                                                                null
                                                                        }
                                                                    </Stack>
                                                                </MenuList>
                                                                {/* {
                                                                    (item.prds) && (item.prds).length !== 0 ?
                                                                        (item.prds).map((itm: any) => {
                                                                            return <MenuList>
                                                                                <MenuItem>{itm.label}</MenuItem>
                                                                            </MenuList>
                                                                            // return <MenuList style={{ marginLeft: '14vw', marginTop: '-6vh' }}>
                                                                            //     <MenuItem>{itm.label}</MenuItem>
                                                                            // </MenuList>
                                                                        }) :
                                                                        null
                                                                } */}
                                                            </>
                                                        }
                                                    })
                                                    :
                                                    null
                                            }
                                        </Menu>
                                        {
                                            productMenu && productMenu.length !== 0 ?
                                                productMenu.map((item: any) => {
                                                    if (item.id !== 99) {
                                                        return <MenuItem fontWeight={600}>{item.label}</MenuItem>
                                                    }
                                                })
                                                :
                                                null
                                        }
                                    </MenuList>
                                </Menu>
                                <Button fontSize={"xl"} variant="ghost">Inspiration</Button>
                                <Button fontSize={"xl"} variant="ghost">Contact</Button>
                            </HStack>

                            {/* Social Icons on the far right */}
                            <HStack spacing={2} display={{ base: "none", md: "flex" }}>
                                {
                                    socialMenu && socialMenu.length !== 0 ?
                                        socialMenu.map((item: any) => {
                                            return <IconButton
                                                as="a"
                                                href={item.href}
                                                aria-label={item.ariaLabel}
                                                icon={item.icon}
                                                size={item.size}
                                                variant='ghost'
                                                fontSize={item.fontSize}
                                            />
                                        })
                                        :
                                        null
                                }
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
                    {isOpen ? (
                        <Box pb={4} display={{ md: "none" }}>
                            <Stack as="nav" spacing={4}>
                                <Button w="100%">Home</Button>
                                <Button w="100%">About</Button>
                                <Menu>
                                    <MenuButton as={Button}>
                                        Services
                                    </MenuButton>
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

                            {/* Social Icons for Mobile */}
                            <HStack spacing={4} justify="center" mt={4}>
                                {
                                    socialMenu && socialMenu.length !== 0 ?
                                        socialMenu.map((item: any) => {
                                            return <IconButton
                                                as="a"
                                                href={item.href}
                                                aria-label={item.ariaLabel}
                                                icon={item.icon}
                                                size={item.size}
                                                variant={item.variant}
                                            />
                                        })
                                        :
                                        null
                                }
                            </HStack>
                        </Box>
                    ) : null}
                </Box>
            </header>
        </>
    );
}

export default Header;