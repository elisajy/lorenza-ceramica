import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import "./Layout.css";
import companyLogo from '../../assets/mock-media/lorenza-logo-transparent-white.png';
import { FaFacebookF, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ children }: any) => {
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

    const openUrl = (url: string) => {
        window.open(url, "_blank");
      }

    return (
        <>
            <footer className="footer">
                <>
                    <Flex color='white'>
                        <Box flex='3' className="footer-box">
                            {/* Logo */}
                            <div>
                                <img src={companyLogo} className="footer-logo" />
                            </div>
                            <Divider />
                            {/* Company Info */}
                            <div className="company-info-block">
                                <p style={{ fontSize: 22, wordSpacing: 8 }}>W.K CERAMIC DISTRIBUTOR SDN. BHD.</p>
                                <p style={{ fontSize: 18, wordSpacing: 6 }}>(Reg. no.: 199301022836)</p>
                                <p style={{ fontSize: 18, wordSpacing: 6 }}>Wisma W.K</p>
                                <p>Lot 5, Jalan 51A/227</p>
                                <p>46100 Petaling Jaya, Selangor D.E</p>
                            </div>
                            {/* Operating Hours */}
                            <div className="operating-hour-block">
                                <p style={{ fontSize: 18, wordSpacing: 8 }}>Mon - Sat | 08:30 - 18:00</p>
                            </div>
                        </Box>
                        <Box flex='2' className="footer-box">
                            <div className="heading-block">
                                <Heading as='h2' fontSize={'26px'} letterSpacing={3}>
                                    INFORMATION
                                </Heading>
                            </div>
                            <div className="nav-block">
                                <Button colorScheme='white' variant='link'>
                                    Main Page
                                </Button>
                                <Button colorScheme='white' variant='link'>
                                    About Us
                                </Button>
                                <Button colorScheme='white' variant='link'>
                                    Products
                                </Button>
                                <Button colorScheme='white' variant='link'>
                                    Inspiration
                                </Button>
                                <Link to="/faq">
                                    <Button colorScheme='white' variant='link'>
                                        FAQ
                                    </Button>
                                </Link>
                            </div>
                        </Box>
                        <Box flex='2' className="footer-box">
                            <div className="heading-block">
                                <Heading as='h2' fontSize={'26px'} letterSpacing={3}>
                                    CONTACT
                                </Heading>
                            </div>
                            <div className="contact-block">
                                <p style={{ fontSize: '18px', letterSpacing: 1 }}>Tel: +60378740112</p>
                                <p style={{ fontSize: '18px', letterSpacing: 1 }}>Fax: +60378767553</p>
                            </div>
                            <div className="social-block">
                                <IconButton
                                    as="a"
                                    href="#facebook"
                                    aria-label="Facebook"
                                    icon={<FaFacebookF />}
                                    size="md"
                                    variant="outline"
                                    onClick={() => openUrl('https://www.facebook.com/wk.lorenza')}
                                />
                                <IconButton
                                    as="a"
                                    href="#instagram"
                                    aria-label="Instagram"
                                    icon={<FaInstagram />}
                                    size="md"
                                    variant="outline"
                                    onClick={() => openUrl('https://www.instagram.com/lorenza.ceramica')}
                                />
                            </div>
                        </Box>
                    </Flex>
                </>
                <p style={{float: 'right'}}>© 2024 Lorenza Ceramica. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;