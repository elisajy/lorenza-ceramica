import "./Layout.css";
import { headerMenu } from "../../helper/HeaderMenu";
import {
  faCartShopping,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Spacer,
  Center,
  Square,
} from "@chakra-ui/react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  FaFacebookSquare,
  FaShoppingCart,
  FaInstagramSquare,
} from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }: any) => {
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

  const onClickInquiry = () => {
    const phoneNumber = process.env.REACT_APP_BUSINESS_CONTACT;
    let message = "Hi, I'm interested to know more about your products.";
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}&app_absent=0`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="layout">
        <Header></Header>
        <main className="content">{children}</main>
        <Button variant="unstyled" size='lg' alignItems='center' className="whatsapp-fab" onClick={onClickInquiry}>
          <FontAwesomeIcon icon={faWhatsapp} size='3x' />
        </Button>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
