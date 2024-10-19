import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import "./Layout.css";
import companyLogo from '../../assets/mock-media/lorenza-logo-transparent-white.png';

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
                            <div>
                                <Heading as='h2' size='md' letterSpacing={3}>
                                    INFORMATION
                                </Heading>
                            </div>
                            <div className="nav-block">
                                <Button colorScheme='teal' variant='link'>
                                    Main Page
                                </Button>
                                <Button colorScheme='teal' variant='link'>
                                    About Us
                                </Button>
                                <Button colorScheme='teal' variant='link'>
                                    Products
                                </Button>
                                <Button colorScheme='teal' variant='link'>
                                    Inspiration
                                </Button>
                                <Button colorScheme='teal' variant='link'>
                                    FAQ
                                </Button>
                            </div>
                        </Box>
                        <Box flex='2' className="footer-box">
                            <p>Box1</p>
                        </Box>
                    </Flex>
                </>
                <p>© 2024 Lorenza Ceramica. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;