import "./Layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Suspense, useRef } from "react";
import { Button, Spinner } from "@chakra-ui/react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }: any) => {
  const footerRef = useRef<HTMLDivElement>(null);

  const handleScrollToFooter = () => {
    footerRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onClickInquiry = () => {
    const phoneNumber = process.env.REACT_APP_BUSINESS_CONTACT;
    let message = "Hi, I'm interested to know more about your products.";
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}&app_absent=0`;
    window.open(url, "_blank");
  };

  return (
    <Suspense fallback={<Spinner />}>
      <div className="layout">
        <Header onScrollToFooter={handleScrollToFooter}></Header>
        <main className="content">{children}</main>
        <Button
          variant="unstyled"
          size="lg"
          alignItems="center"
          className="whatsapp-fab"
          onClick={onClickInquiry}
        >
          <FontAwesomeIcon
            className="whatsapp-fab-icon"
            icon={faWhatsapp}
            size="3x"
          />
        </Button>
        <Footer ref={footerRef}></Footer>
      </div>
    </Suspense>
  );
};

export default Layout;
