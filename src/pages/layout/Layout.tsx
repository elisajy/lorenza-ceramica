import "./Layout.css";
import { headerMenu } from '../../helper/HeaderMenu';
import { faCartShopping, faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
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
  Square
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaFacebookSquare, FaShoppingCart, FaInstagramSquare } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }: any) => {
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
      <div className="layout">
        <Header></Header>
        <main className="content">{children}</main>
        <Footer></Footer>
      </div >
    </>
  );
}

export default Layout;