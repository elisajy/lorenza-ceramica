import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  VStack,
} from "@chakra-ui/react";
import "./Faq.css";
import { useEffect, useState } from "react";

const Faq = () => {
  const [faq, setFaq] = useState<any>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/faq`)
      .then((response) => response.json())
      .then((data) => setFaq(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const faqList = () => {
    return faq.map((y: any, i: number) => {
      return (
        <Box key={i} maxWidth="8xl" margin="30px">
          <h2
            className="content-text"
            style={{
              fontWeight: "500",
              fontSize: "x-large",
              marginBottom: "15px",
            }}
          >
            {y.category}
          </h2>
          <Accordion className="faq-accordion" allowMultiple>
            {y.children.map((x: any, index: number) => {
              return (
                <AccordionItem key={index}>
                  <AccordionButton className="title">
                    <Box as="span" flex="1" textAlign="left" fontSize="large">
                      {x.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel className="content" pb={4}>
                    <p
                      className="content-text"
                      dangerouslySetInnerHTML={{ __html: x.content }}
                    ></p>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      );
    });
  };

  return (
    <Box>
      <Box maxWidth="8xl" margin="30px 60px">
        <div style={{ margin: "26px" }}>
          <h2
            className="title"
            style={{ fontWeight: "bold", fontSize: "xx-large" }}
          >
            FAQs
          </h2>
          <p className="content-text">
            Have questions? Here you'll find answers most valued by our
            partners, along with access to step-by-step instructions and
            support.
          </p>
        </div>
        <Divider />
        <VStack>{faqList()}</VStack>
      </Box>
    </Box>
  );
};

export default Faq;
